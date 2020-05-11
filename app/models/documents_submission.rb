class DocumentsSubmission < ApplicationRecord
  has_many :documents, as: :documentable
end
