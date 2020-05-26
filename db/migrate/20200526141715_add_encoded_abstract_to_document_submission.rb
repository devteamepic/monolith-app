class AddEncodedAbstractToDocumentSubmission < ActiveRecord::Migration[5.2]
  def change
    add_column :documents_submissions, :encoded_abstract, :jsonb, default: {}
  end
end
