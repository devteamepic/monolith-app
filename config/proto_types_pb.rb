# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto_types.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "rails_api.Document" do
    optional :id, :int32, 1
    optional :name, :string, 2
    optional :mime, :string, 3
    optional :size, :double, 4
    optional :file, :string, 5
  end
end

module RailsApi
  Document = Google::Protobuf::DescriptorPool.generated_pool.lookup("rails_api.Document").msgclass
end
