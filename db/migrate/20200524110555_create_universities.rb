class CreateUniversities < ActiveRecord::Migration[5.2]
  def change
    create_table :universities do |t|
      t.string :name
      t.string :founded_at
      t.string :email
      t.string :logo
      t.timestamps
    end
  end
end
