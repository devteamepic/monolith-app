class CreateSubmissionResults < ActiveRecord::Migration[5.2]
  def change
    create_table :submission_results do |t|
      t.references :user_submission
      t.references :professor_submission
      t.timestamps
    end
  end
end
