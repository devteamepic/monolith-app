class CreateDocumentsSubmissions < ActiveRecord::Migration[5.2]
  def change
    create_table :documents_submissions do |t|
      t.string :abstract
      t.references :user
      t.references :status

      t.timestamps
    end
  end
end
