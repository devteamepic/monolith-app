class Documents::Create < ApplicationService
  attr_accessor :sender
  def initialize(sender)
    @sender = sender
  end

  def call(params)
    @document = Document.new(params.merge(sender: sender))

    if @document.save
      # publish_new_document
      success document: @document
    else
      failure errors: @document.errors.full_messages.first
    end
  end

  # private
  # def publish_new_document
  #   publish_service = Messages::Publish.new
  #   publish_service.call(@document.to_proto)
  # end
end
