namespace :bunny do
  desc 'start consumer'
  task :worker do
    require File.join("#{Rails.root}", "app","services", "bunny","connection.rb")
    require 'bunny'
    require_relative '../../config/proto_types_pb'

    connection = Bunny::Connection.get

    channel = connection.create_channel
    queue = channel.queue('submission_result_queue', durable: true)

    channel.prefetch(1)
    puts ' [*] Waiting for messages. To exit press CTRL+C'

    begin
      # block: true is only used to keep the main thread
      # alive. Please avoid using it in real world applications.
      queue.subscribe(manual_ack: true, block: true) do |delivery_info, _properties, body|

        channel.ack(delivery_info.delivery_tag)
      end
    rescue Interrupt => _
      connection.close
    end
  end
end
