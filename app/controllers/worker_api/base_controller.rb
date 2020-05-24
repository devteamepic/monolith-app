class WorkerApi::BaseController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :validate_request

  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  def validate_request
    raise ActiveRecord::RecordNotFound unless request.headers['Access-Token'] == secret
  end

  def secret
    @secret ||= Rails.application.credentials[:worker_token]
  end

  def not_found(msg = 'Not found')
    render json: { code: 404, message: msg }, status: 404
  end
end
