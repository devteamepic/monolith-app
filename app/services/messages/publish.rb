class Messages::Publish < ApplicationService
  require 'bunny'

  attr_accessor :connection, :channel, :queue

  def initialize(queue_name: 'documents_queue')
    @connection = Bunny::Connection.get

    @channel = connection.create_channel
    @queue = channel.queue(queue_name, durable: true)
  end

  def call(message)
    begin
      enqueue_message message
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
