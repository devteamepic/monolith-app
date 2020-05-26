class WorkerApi::V1::SubmissionsController < WorkerApi::BaseController
  include ActionController::Live

  def list
    response.headers["Content-Type"] = "application/stream+json"
    sse = SSE.new(response.stream, retry: 300, event: "professor_submissions")

    DocumentsSubmission
        .joins("INNER JOIN users on users.id = documents_submissions.user_id and users.type = 'ProfessorUser'")
        .joins("INNER JOIN submission_statuses on documents_submissions.status_id = submission_statuses.id and submission_statuses.name = 'Verified'")
        .find_each(batch_size: 20) do |batch|
      sse.write(
          {
              professor_submission:  ActiveModelSerializers::SerializableResource.new(
                  batch, each_serializer: DocumentsSubmissionShortSerializer
              ).as_json
          }
      )
    end
  rescue IOError
    # Client disconnected
  ensure
    sse&.close
  end

  def create_result
    user_submission = DocumentsSubmission.find_by(id: params[:submission_id])

    raise ActiveRecord::RecordNotFound if user_submission.blank?

    batch_actions = Actions::Batch::SubmissionResult.new(user_submission)

    res = batch_actions.call(params[:professor_submission_ids])

    if res.success?
      render json: {success: true}
    else
      render json: {success: false, message: res.errors}, status: 500
    end
  end

  def update_encoded
    submission = DocumentsSubmission.find_by(id: params[:submission_id])
    raise ActiveRecord::RecordNotFound if submission.blank?

    if submission.update(encoded_abstract: {tokens: params[:tokens_array]})
      render json: {success: true}
    else
      render json: {success: false}, status: 500
    end
  end

  def get_encoded_abstracts
    subs = DocumentsSubmission
            .joins("INNER JOIN users on users.id = documents_submissions.user_id and users.type = 'ProfessorUser'")
            .joins("INNER JOIN submission_statuses on documents_submissions.status_id = submission_statuses.id and submission_statuses.name = 'Verified'")
    render json: subs, namespace: Encoded
  end
end
