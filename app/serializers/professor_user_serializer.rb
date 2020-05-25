class ProfessorUserSerializer < ApplicationSerializer
  attributes :id, :full_name, :email, :degree, :university

  def full_name
    object.full_name
  end

  def university
    {id: object.university.id, name: object.university.name}
  end
end
