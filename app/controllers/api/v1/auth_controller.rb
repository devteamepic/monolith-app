class Api::V1::AuthController < ApplicationController
  skip_before_action :verify_authenticity_token

  def sign_in
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
        application_id: 2,
        # secret_id: "657t8PJzuKp5vMJ1rE9gVYNN0xgRleUxIW3uKpUaZz4"
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

  end
end
