class UniversitySerializer < ApplicationSerializer
  attributes :id, :name, :email, :logo

  def logo
    object.logo.url
  end
end
