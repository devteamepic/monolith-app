class ProfessorUser < User
  has_many :documents, dependent: :destroy, inverse_of: :user
end
