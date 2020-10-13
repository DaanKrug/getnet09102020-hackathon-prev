defmodule ExApp.SupplyproductValidator do
  
  use ExApp.BaseValidator
  alias ExApp.StringUtil
  alias ExApp.NumberUtil
  alias ExApp.SanitizerUtil
  alias ExApp.MapUtil
  
  def getA1_supplyid(mapParams,defaultValue \\ nil) do
    value = NumberUtil.coalesce(MapUtil.get(mapParams,:a1_supplyid),defaultValue,true)
    NumberUtil.toInteger(SanitizerUtil.sanitizeAll(value,true,true,20,nil))
  end
  
  def getA2_supplyname(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:a2_supplyname),defaultValue) |> StringUtil.capitalize()
    SanitizerUtil.sanitizeAll(value,false,true,250,"A-z0-9")
  end 
  
  def getA3_productid(mapParams,defaultValue \\ nil) do
    value = NumberUtil.coalesce(MapUtil.get(mapParams,:a3_productid),defaultValue,true)
    NumberUtil.toInteger(SanitizerUtil.sanitizeAll(value,true,true,20,nil))
  end
  
  def getA4_amount(mapParams,defaultValue \\ nil) do
    value = NumberUtil.coalesce(MapUtil.get(mapParams,:a4_amount),defaultValue,true)
    value = NumberUtil.toFloat(SanitizerUtil.sanitizeAll(value,true,true,11,nil))
    NumberUtil.coalesceInterval(value,0,NumberUtil.maxInteger())
  end
  
end