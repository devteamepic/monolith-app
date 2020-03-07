class CreateDocuments < ActiveRecord::Migration[5.2]
  def change
    create_table :documents do |t|
      t.string :name
      t.references :user
      t.string :mime
      t.float :size
      t.string :file, null: false
      t.timestamps
    end
  end
end
