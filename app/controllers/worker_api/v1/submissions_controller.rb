class WorkerApi::V1::SubmissionsController < WorkerApi::BaseController

  def list
    subs = DocumentsSubmission
        .joins("INNER JOIN users on users.id = documents_submissions.user_id and users.type = 'ProfessorUser'")
        .joins("INNER JOIN submission_statuses on documents_submissions.status_id = submission_statuses.id and submission_statuses.name = 'Verified'").where('documents_submissions.encoded_abstract::text = \'{}\'::text')

    render json: ActiveModelSerializers::SerializableResource.new(subs, each_serializer: DocumentsSubmissionShortSerializer)
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
