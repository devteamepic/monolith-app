class WorkerApi::V1::SubmissionsController < WorkerApi::BaseController
  def list
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
end
