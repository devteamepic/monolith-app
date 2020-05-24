class ProfessorUser < User
  has_many :documents, as: :sender, dependent: :destroy
  has_many :documents_submissions, dependent: :destroy

  belongs_to :university
end
