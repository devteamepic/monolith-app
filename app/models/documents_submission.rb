class DocumentsSubmission < ApplicationRecord
  require_relative '../../config/proto_types_pb'
  has_many :documents, as: :documentable
  belongs_to :status, class_name: "SubmissionStatus", foreign_key: "status_id"
  belongs_to :user

  def to_proto
    RailsApi::Document.encode(RailsApi::Document.new(id: id, abstract: abstract, status: status))
  end
end
