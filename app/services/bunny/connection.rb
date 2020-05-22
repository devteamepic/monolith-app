class Bunny::Connection
  def self.get
    connection ||= Bunny.new(host: Rails.application.credentials[:RABBITMQ_HOST],
                             user: Rails.application.credentials[:RABBITMQ_USERNAME],
                             password: Rails.application.credentials[:RABBITMQ_PASSWORD],
                             automatically_recover: false)
    connection.start
  end
end
