class Api::V1::BaseApiController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :doorkeeper_authorize!
  before_action :allow_all

  def allow_all
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  end
  
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
