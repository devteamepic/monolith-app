class DocumentSerializer < ApplicationSerializer
  attributes :id, :name, :mime, :size, :file, :file_preview

  def file
    object.file.url
  end

  def file_name
    object.file
  end

  def file_preview
    object.file.thumb.url
  end
end