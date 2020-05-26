class ProfessorUser < User
  has_many :documents, as: :sender
  has_many :documents_submissions

  belongs_to :university, optional: true
end
