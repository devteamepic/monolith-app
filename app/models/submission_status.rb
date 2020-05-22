class SubmissionStatus < ApplicationRecord
  def to_proto
    # RailsApi::DocumentsSubmission::Status.encode(RailsApi::DocumentsSubmission::Status.new(id: id, name: name))
    RailsApi::DocumentsSubmission::Status.new(id: id, name: name)
  end
end
