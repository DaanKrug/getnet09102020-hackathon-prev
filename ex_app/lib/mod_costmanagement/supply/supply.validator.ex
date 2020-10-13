defmodule ExApp.SupplyValidator do
  
  use ExApp.BaseValidator
  alias ExApp.StringUtil
  alias ExApp.NumberUtil
  alias ExApp.SanitizerUtil
  alias ExApp.MapUtil
  
  def getA1_name(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:a1_name),defaultValue) |> StringUtil.capitalize()
    SanitizerUtil.sanitizeAll(value,false,true,250,"A-z0-9")
  end 
  
  def getA2_valor(mapParams,defaultValue \\ nil) do
    value = NumberUtil.coalesce(MapUtil.get(mapParams,:a2_value),defaultValue)
    value = SanitizerUtil.sanitizeAll(value,true,true,12,"0-9")
    NumberUtil.toFloat(value)
  end
  
  def getA3_un(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:a3_un),defaultValue) |> String.downcase()
    SanitizerUtil.sanitizeAll(value,false,true,10,"A-z")
  end 
  
  
end