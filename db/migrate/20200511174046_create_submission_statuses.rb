class CreateSubmissionStatuses < ActiveRecord::Migration[5.2]
  def change
    create_table :submission_statuses do |t|
      t.string :name
      t.string :color
      t.timestamps
    end
  end
end
