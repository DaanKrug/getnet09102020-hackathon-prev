defmodule ExApp.HandcashValidator do
  
  use ExApp.BaseValidator
  alias ExApp.StringUtil
  alias ExApp.SanitizerUtil
  alias ExApp.MapUtil
  
  def getA1_name(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:a1_name),defaultValue)
    SanitizerUtil.sanitize(value)
  end
  
  def getA3_reportdata(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:a3_reportdata),defaultValue)
    SanitizerUtil.sanitize(value)
  end
  
end