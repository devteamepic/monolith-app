class StaticController < ApplicationController
  def index
    @data = {value: "aaaa"}
  end
end