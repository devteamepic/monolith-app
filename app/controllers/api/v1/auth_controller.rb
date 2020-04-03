class Api::V1::AuthController < ApplicationController
  skip_before_action :verify_authenticity_token

  def sign_in
    p params
    result = User.authenticate(params[:email], params[:password])

    unless result.present?
      return render json: {
          message: 'Login or Password is Incorrect'
      }, status: 403
    end

    token = Doorkeeper::AccessToken.create!(
        :resource_owner_id => result.id,
        :use_refresh_token => true,
        :scopes => "general",
        application_id: 1,
    )

    render json: {
        user_id: result.id,
        access_token: token.token,
        refresh_token: token.refresh_token,
        token_type: token.token_type,
        expires_in: token.expires_in,
        created_at: token.created_at
    }
  end

  def sign_up
    if User.find_by(email: params[:email]).present?
      return render json: {
          message: "Email already in use"
      }, status: 400
    end

    user = User.new(email: params[:email],
                    password: params[:password],
                    first_name: params[:first_name],
                    last_name: params[:last_name])

    if user.save
      return render json: user
    else
      return render json: {message: user.errors.full_messages.last}, status: 500
    end
  end
end
