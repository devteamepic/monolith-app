class Messages::Publish < ApplicationService
  require 'bunny'

  attr_accessor :connection, :channel, :queue

  def initialize(queue_name: 'documents_queue')
    @connection = Bunny.new(automatically_recover: true)
    @connection.start

    @channel = connection.create_channel
    @queue = channel.queue(queue_name, durable: true)
  end

  def call(*messages)
    begin
      messages.each do |message|
        enqueue_message message
      end
    ensure
      close_connection
    end
  end

  private

  def enqueue_message(message)

    queue.publish(message, persistent: true)
  end

  def close_connection
    connection.close
  end
end
