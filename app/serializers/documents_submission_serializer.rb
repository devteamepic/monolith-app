class DocumentsSubmissionSerializer < ApplicationSerializer
  attributes :id, :abstract, :status, :sender
  has_many :documents, as: :documentable

  def status
    {name: object.status.name, color: object.status.color}
  end

  def sender
    if object.user.is_a? ProfessorUser
      ActiveModelSerializers::SerializableResource.new(object.user, serializer: ProfessorUserSerializer)
    elsif object.user.is_a? User
      ActiveModelSerializers::SerializableResource.new(object.user, serializer: UserSerializer)
    end
  end
end
