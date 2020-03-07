class Api::V1::BaseApiController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :doorkeeper_authorize!

  def authenticate_user
    unless current_user
      render json: {
          message: "Unauthorized"
      }, status: 401
    end
  end

  def current_user
    if doorkeeper_token.present?
      @current_user ||= User.find(doorkeeper_token[:resource_owner_id])
    end
  end
end
