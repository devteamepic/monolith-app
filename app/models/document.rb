class Document < ApplicationRecord
  belongs_to :user, inverse_of: :documents
  # validates_presence_of :file

  mount_uploader :file, DocumentUploader
end
