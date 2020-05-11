class AppendFieldsToDocuments < ActiveRecord::Migration[5.2]
  def change
    add_column :documents, :sender_id, :bigint
    add_column :documents, :sender_type, :string
    add_column :documents, :documentable_id, :bigint
    add_column :documents, :documentable_type, :string

    Document.all.each do |doc|
      doc.update(sender_id: doc.user_id, sender_type: 'User')
    end

    remove_column :documents, :user_id
  end
end
