class DocumentsSubmission < ApplicationRecord
  require_relative '../../config/proto_types_pb'
  has_many :documents, as: :documentable
  belongs_to :status, class_name: "SubmissionStatus", foreign_key: "status_id"
  belongs_to :user, foreign_key: "user_id"
  has_many :user_submission_results, class_name: "SubmissionResult", foreign_key: "user_submission_id"
  has_many :professor_submission_results, class_name: "SubmissionResult", foreign_key: "professor_submission_id"

  def to_proto
    RailsApi::DocumentsSubmission.encode(RailsApi::DocumentsSubmission.new(id: id, abstract: abstract, status: status.to_proto))
  end
end
