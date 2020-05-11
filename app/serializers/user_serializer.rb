class UserSerializer < ApplicationSerializer
  attributes :id, :full_name, :email

  def full_name
    object.full_name
  end
end
