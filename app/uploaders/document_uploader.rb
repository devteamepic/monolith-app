class DocumentUploader < CarrierWave::Uploader::Base
  require 'rmagick'
  require 'rake'
  include CarrierWave::RMagick


  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def extension_whitelist
    %w(pdf)
  end


  # def cover
  #   manipulate! do |frame, index|
  #     frame if index.zero? # take only the first page of the file
  #   end
  # end
  #
  # version :preview do
  #   process :cover
  #   process :resize_to_fit => [310, 438]
  #   process :convert => :jpg
  #
  #   def full_filename (for_file = model.source.file)
  #     super.chomp(File.extname(super)) + '.jpg'
  #   end
  # end
  # include CarrierWave::MimeTypes

  def geometry
    @geometry
  end

  def get_geometry
    if (@file)
      img = ::Magick::Image::read(@file.file).first
      @geometry = { :width => img.columns, :height => img.rows }
    end
  end

  version :thumb do
    process pdf_preview: [200, 200]
    process :get_geometry

    def full_filename(filename)
      filename = filename.gsub(/pdf|txt/, 'jpg')
      "thumb_#{filename}"
    end
  end

  def pdf_preview(width, height)
    # Read in first page of PDF and resize ([0] -> read the first page only)
    image = ::Magick::Image.read("#{current_path}[0]").first
    image.resize_to_fill!(width, height, ::Magick::NorthGravity)
    # Most PDFs have a transparent background, which becomes black when converted to jpg.
    # To override this, we must create a white canvas and composite the PDF onto the convas.
    # First check the image backgrounf color.
    # #FFFFFFFFFFFF0000 is how ImageMagick defines transparent
    if image.background_color != "#FFFFFFFFFFFF0000"
      # Create a blank canvas
      canvas = ::Magick::Image.new(image.columns, image.rows) { self.background_color = "#FFF" }
      # Merge PDF thumbnail onto canvas
      canvas.composite!(image, ::Magick::CenterGravity, ::Magick::OverCompositeOp)
      # Save as .jpg. We need to change the file extension here so that the fog gem picks it up and
      # sets the correct mime type. Otherwise the mime type will be set to PDF, which confuses browsers.
      canvas.write("jpg:#{current_path}")
    else
      # If the imag ebackground color is transparent we don't need to worry about the canvas.
      image.write("jpg:#{current_path}")
    end
    file.move_to File.basename(filename, '.pdf') + '.jpg'
    # Free memory allocated by RMagick which isn't managed by Ruby
    image.destroy!
    canvas.destroy! unless canvas.nil?
  rescue ::Magick::ImageMagickError => e
    Rails.logger.error "Failed to create PDF thumbnail: #{e.message}"
    raise CarrierWave::ProcessingError, "is not a valid PDF file"
  end


  def filename
    "#{secure_token}.#{file.extension}" if original_filename.present?
  end

  def secure_token
    media_original_filenames_var = :"@#{mounted_as}_original_filenames"

    unless model.instance_variable_get(media_original_filenames_var)
      model.instance_variable_set(media_original_filenames_var, {})
    end

    unless model.instance_variable_get(media_original_filenames_var).map{|k,v| k }.include? original_filename.to_sym
      new_value = model.instance_variable_get(media_original_filenames_var).merge({"#{original_filename}": SecureRandom.uuid})
      model.instance_variable_set(media_original_filenames_var, new_value)
    end

    model.instance_variable_get(media_original_filenames_var)[original_filename.to_sym]
  end
end