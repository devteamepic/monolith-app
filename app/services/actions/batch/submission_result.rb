class Actions::Batch::SubmissionResult < ApplicationService
  def initialize(user_submission)
    @user_submission = user_submission
    @result_creator = ::Submissions::Result.new(user_submission.id)
  end

  def call(professor_submissions_ids)
    professor_submissions_ids.each do |professor_submission_id|
      call_result = @result_creator.call(professor_submission_id: professor_submission_id)
      return failure errors: call_result.errors unless call_result.success?
    end

    status = SubmissionStatus.find_or_create_by(name: "Finished")
    @user_submission.update(status: status)
    success
  end
end
