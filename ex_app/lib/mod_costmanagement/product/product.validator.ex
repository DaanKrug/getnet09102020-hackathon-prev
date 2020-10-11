defmodule ExApp.ProductValidator do
  
  use ExApp.BaseValidator
  alias ExApp.StringUtil
  alias ExApp.NumberUtil
  alias ExApp.SanitizerUtil
  alias ExApp.MapUtil
  
  def getA2_name(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:a2_name),defaultValue) |> StringUtil.capitalize()
    SanitizerUtil.sanitizeAll(value,false,true,250,"A-z0-9")
  end 
  
  def getA3_description(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:a3_description),defaultValue)
    SanitizerUtil.sanitize(value)
  end
  
  def getA4_imageid(mapParams,defaultValue \\ nil) do
    value = NumberUtil.coalesce(MapUtil.get(mapParams,:a4_imageid),defaultValue,true)
    NumberUtil.toInteger(SanitizerUtil.sanitizeAll(value,true,true,20,nil))
  end
  
  def getA5_imagelink(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:a5_imagelink),defaultValue)
    SanitizerUtil.sanitizeAll(value,false,true,0,"url")
  end
  
  def getA6_categoryid(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:a6_categoryid),defaultValue)
    NumberUtil.toInteger(SanitizerUtil.sanitizeAll(value,true,true,20,nil))
  end
  
  def getA7_categoryname(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:a7_categoryname),defaultValue)
    SanitizerUtil.sanitizeAll(value,false,true,250,"A-z0-9")
  end
  
end