class Document < ApplicationRecord
  require_relative '../../config/proto_types_pb'
  # validates_presence_of :file
  belongs_to :documentable, polymorphic: true, optional: true
  belongs_to :sender, polymorphic: true

  mount_uploader :file, DocumentUploader

  def to_proto
    RailsApi::Document.encode(RailsApi::Document.new(id: id, mime: mime, size: size, file: file.url))
  end
end
