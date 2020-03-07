class Api::V1::UsersController < Api::V1::BaseApiController

  def index
    render json: current_user
  end
end
