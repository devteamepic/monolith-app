class DocumentsSubmissionSerializer < ApplicationSerializer
  attributes :id, :abstract, :status
  has_many :documents, as: :documentable

  def status
    {name: object.status.name, color: object.status.color}
  end
end
