Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
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

        post '/:user_id/documents' => 'api/v1/documents#create'
        get '/:user_id/documents' => 'api/v1/documents#list'

        post '/:user_id/documents/submissions' => 'api/v1/submissions#create'
        get '/:user_id/documents/submissions' => 'api/v1/submissions#list'
      end
    end
  end

  namespace :submissions do
    get '/submissions' => 'submissions#list'
    get '/submissions/:id' => 'submissions#show'
  end

  get '*page', to: "static#index", constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end
