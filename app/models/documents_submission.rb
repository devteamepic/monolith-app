class DocumentsSubmission < ApplicationRecord
  has_many :documents, as: :documentable
  belongs_to :status, class_name: "SubmissionStatus", foreign_key: "status_id"
  belongs_to :user
end
