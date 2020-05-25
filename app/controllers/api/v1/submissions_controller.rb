class Api::V1::SubmissionsController < Api::V1::BaseApiController
  def list
    submissions = DocumentsSubmission.where(user: current_user)

    render json: submissions
  end

  def create
    service = Documents::Submissions::Create.new(current_user)

    result = service.call(submission_params)

    if result.success?
      render json: result.documents_submission
    else
      render json: {message: result.errors}, status: 500
    end
  end

  def results
    submission_results = SubmissionResult.where(user_submission_id: params[:submission_id])
    render json: submission_results
  end

  def submission_params
    params.permit(:abstract, document_ids: [])
  end
end
