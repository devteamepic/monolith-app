class AddUniversityToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :university_id, :bigint
    add_column :users, :degree, :string
  end
end
