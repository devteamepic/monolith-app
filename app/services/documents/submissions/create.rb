class Documents::Submissions::Create < ApplicationService
  def initialize(sender)
    @sender = sender
  end

  def call(params)
    status = SubmissionStatus.find_or_create_by(name: "Submitted", color: "#42FF6F")
    @documents_submission = DocumentsSubmission.new(user: @sender,
                                                  abstract: params[:abstract],
                                                  status: status,
                                                  document_ids: params[:document_ids])

    if @documents_submission.save
      success documents_submission: @documents_submission
    else
      failure errors: @documents_submission.errors.full_messages.first
    end
  end

  private
  def publish_new_submission
    publish_service = Messages::Publish.new
    publish_service.call(@documents_submission.to_proto)
  end
end
