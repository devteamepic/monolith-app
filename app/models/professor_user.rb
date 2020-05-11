class ProfessorUser < User
  has_many :documents, as: :sender, dependent: :destroy
end
