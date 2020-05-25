class SubmissionResultSerializer < ApplicationSerializer
  attributes :id, :user_submission_id, :professor_submission

  # def user_submission
  #   ActiveModelSerializers::SerializableResource.new(object.user_submission, serializer: DocumentsSubmissionSerializer)
  # end

  def professor_submission
    ActiveModelSerializers::SerializableResource.new(object.professor_submission, serializer: DocumentsSubmissionSerializer)
  end
end
