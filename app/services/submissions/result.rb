class Submissions::Result < ApplicationService
  def initialize(user_submission_id)
    @user_submission_id = user_submission_id
  end

  def call(professor_submission_id:)
    @result = SubmissionResult.find_or_initialize_by(user_submission_id: @user_submission_id,
                                                     professor_submission_id: professor_submission_id)

    if @result.save
      success submission_result: @result
    else
      failure errors: @result.errors.full_messages.last
    end
  end
end
