class SubmissionResult < ApplicationRecord
  belongs_to :user_submission, class_name: "DocumentsSubmission", foreign_key: "user_submission_id"
  belongs_to :professor_submission, class_name: "DocumentsSubmission", foreign_key: "professor_submission_id"
end
