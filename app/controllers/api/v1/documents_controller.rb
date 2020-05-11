class Api::V1::DocumentsController < Api::V1::BaseApiController
  def create
    unless params[:file].present?
      render json: {
          message: "File must be attached!"
      }, status: 400
    end

    creator_service = Documents::Create.new(current_user)

    result = creator_service.call(permitted_params)

    if result.success?
      render json: result.document
    else
      render json: {
          message: "An error occurred while uploading file, #{result.errors}"
      }, status: 500
    end
  end

  def list
    render json: Document.where(sender: current_user)
  end

  private def permitted_params
    params.permit(:file, :size, :mime, :name, :user_id)
  end
end