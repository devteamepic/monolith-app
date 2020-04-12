class Api::V1::DocumentsController < Api::V1::BaseApiController
  def create
    unless params[:file].present?
      render json: {
          message: "File must be attached!"
      }, status: 400
    end

    document = Document.new(permitted_params)

    if document.save
      document.reload

      service = Messages::Publish.new
      service.call(document.to_proto)
      render json: document
    else
      render json: {
          message: "An error occurred while uploading file, #{document.errors.full_messages.first}"
      }, status: 500
    end
  end

  def list
    render json: Document.where(user: current_user)
  end

  private def permitted_params
    params.permit(:file, :size, :mime, :name, :user_id)
  end
end