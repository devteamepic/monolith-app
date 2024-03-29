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
        get '/:user_id/documents/submissions/:submission_id/results' => 'api/v1/submissions#results'
      end
    end
  end

  scope :worker_api do
    scope :v1 do
      scope :submissions do
        get "/" => "worker_api/v1/submissions#list"
        post "/:submission_id" => "worker_api/v1/submissions#create_result"

        get "/list/encoded" => "worker_api/v1/submissions#get_encoded_abstracts"
        post "/:submission_id/encoded" => "worker_api/v1/submissions#update_encoded"
      end
    end
  end

  get '*page', to: "static#index", constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end
