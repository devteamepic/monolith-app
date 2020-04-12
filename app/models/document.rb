class Document < ApplicationRecord
  belongs_to :user, inverse_of: :documents
  require_relative '../../config/proto_types_pb'
  # validates_presence_of :file

  mount_uploader :file, DocumentUploader

  def to_proto
    RailsApi::Document.encode(RailsApi::Document.new(id: id, mime: mime, size: size, file: file.url))
  end
end
