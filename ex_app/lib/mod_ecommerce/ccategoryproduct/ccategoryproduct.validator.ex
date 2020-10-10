defmodule ExApp.CcategoryproductValidator do
  
  use ExApp.BaseValidator
  alias ExApp.StringUtil
  alias ExApp.SanitizerUtil
  alias ExApp.MapUtil
  
  def getA1_name(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:a1_name),defaultValue) |> StringUtil.capitalize()
    SanitizerUtil.sanitizeAll(value,false,true,250,"A-z0-9")
  end 
  
end