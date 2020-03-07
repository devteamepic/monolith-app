class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :access_grants,
           class_name: 'Doorkeeper::AccessGrant',
           foreign_key: :resource_owner_id,
           dependent: :delete_all

  has_many :access_tokens,
           class_name: 'Doorkeeper::AccessToken',
           foreign_key: :resource_owner_id,
           dependent: :delete_all

  has_many :documents, dependent: :destroy, inverse_of: :user

  def self.authenticate(email, password)
    user = User.find_for_authentication(email: email)
    user.try(:valid_password?, password) ? user : nil
  end
end
