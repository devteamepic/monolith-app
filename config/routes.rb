Rails.application.routes.draw do
  use_doorkeeper
  devise_for :users
  root "static#index"

  scope :api, defaults: { format: :json } do
    scope :v1 do
      scope :auth do
        post '/sign_in' => "api/v1/auth#sign_in"
        post '/sign_up' => "api/v1/auth#sign_up"
      end

      scope :users do
        get '/me' => 'api/v1/users#index'
      end
    end
  end

  get '*page', to: "static#index", constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end
