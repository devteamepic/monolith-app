class ApplicationService
  def success(params={})
    OpenStruct.new(params.merge(success?: true))
  end

  def failure(params={})
    OpenStruct.new(params.merge(success?: false))
  end
end
