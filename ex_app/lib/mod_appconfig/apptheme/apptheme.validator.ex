defmodule ExApp.AppThemeValidator do

  alias ExApp.StringUtil
  alias ExApp.NumberUtil
  alias ExApp.SanitizerUtil
  alias ExApp.MapUtil
  
  def getName(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:name),defaultValue)
    SanitizerUtil.sanitizeAll(value,false,true,30,"A-z0-9")
  end
  
  def getImage(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:image),defaultValue)
    value = SanitizerUtil.sanitizeAll(value,false,true,50,"A-z0-9")
    member = Enum.member?(validImages(),value)
    cond do
      (!member and nil == defaultValue) -> "aircity-min.jpg"
      (!member) -> defaultValue
      true -> value
    end
  end
  
  def getDefaultTheme(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:defaultTheme),defaultValue)
    value = SanitizerUtil.sanitizeAll(value,false,true,20,"A-z0-9")
    member = Enum.member?(validThemes(),value)
    cond do
      (!member and nil == defaultValue) -> "blue01"
      (!member) -> defaultValue
      true -> value
    end
  end
  
  def getThemes(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:themes),defaultValue)
    value = SanitizerUtil.sanitizeAll(value,false,true,250,"A-z0-9")
    empty = length(StringUtil.split(value,",")) == 0
    cond do
      (empty and nil == defaultValue) -> getDefaultTheme(mapParams)
      (empty) -> defaultValue
      true -> value
    end
  end
  
  def getOrganization(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:organization),defaultValue)
    value = SanitizerUtil.sanitizeAll(String.downcase(value),false,true,10,"A-z0-9")
    member = Enum.member?(validOrganizations(),value)
    cond do
      (!member and nil == defaultValue) -> "mode01"
      (!member) -> defaultValue
      true -> value
    end
  end
  
  def getImageHeight(mapParams,defaultValue \\ nil) do
    value = NumberUtil.coalesce(MapUtil.get(mapParams,:imageHeight),defaultValue,true)
    value = NumberUtil.toInteger(SanitizerUtil.sanitizeAll(value,true,true,2,"0-9"))
    NumberUtil.coalesceInterval(value,10,20)
  end
  
  def getPositionX(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:positionX),defaultValue)
    value = SanitizerUtil.sanitizeAll(String.downcase(value),false,true,10,"a-z")
    member = Enum.member?(validXImagePositions(),value)
    cond do
      (!member and nil == defaultValue) -> "center"
      (!member) -> defaultValue
      true -> value
    end
  end
  
  def getPositionY(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:positionY),defaultValue)
    value = SanitizerUtil.sanitizeAll(String.downcase(value),false,true,10,"a-z")
    member = Enum.member?(validYImagePositions(),value)
    cond do
      (!member and nil == defaultValue) -> "center"
      (!member) -> defaultValue
      true -> value
    end
  end
  
  def getBackgroundWidth(mapParams,defaultValue \\ nil) do
    value = NumberUtil.coalesce(MapUtil.get(mapParams,:backgroundWidth),defaultValue,true)
    value = NumberUtil.toInteger(SanitizerUtil.sanitizeAll(value,true,true,3,"0-9"))
    NumberUtil.coalesceInterval(value,10,100)
  end
  
  def getBackgroundHeight(mapParams,defaultValue \\ nil) do
    value = NumberUtil.coalesce(MapUtil.get(mapParams,:backgroundHeight),defaultValue,true)
    value = NumberUtil.toInteger(SanitizerUtil.sanitizeAll(value,true,true,3,"0-9"))
    NumberUtil.coalesceInterval(value,10,100)
  end
  
  def getBackgroundRepeat(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:backgroundRepeat),defaultValue)
    value = SanitizerUtil.sanitizeAll(String.downcase(value),false,true,10,"A-z0-9")
    member = Enum.member?(validBackgroundPositions(),value)
    cond do
      (!member and nil == defaultValue) -> "no-repeat"
      (!member) -> defaultValue
      true -> value
    end
  end
    
  defp validImages() do
    #dir = "#{__DIR__}/../../priv/static/headers/*.*"
    #arr = Path.wildcard(dir) |> Enum.map(&Path.basename/1)
    #IO.inspect(arr)
    #arr
    ["aircity-min.jpg", "aircity2-min.jpg", "autumforest-min.jpg", "bardcup-min.jpg", "calw01-min.jpg", 
     "calw02-min.jpg", "calw03-min.jpg", "calw04-min.jpg", "calw05-min.jpg", "camping-min.jpg", 
     "citylogic-min.jpg", "cups-min.jpg", "curvedsunset-min.jpg", "dresden01-min.jpg", "dresden02-min.jpeg", 
     "dresden03-min.jpg", "dresden04-min.jpg", "dresden05-min.jpg", "dresden06-min.jpg", "dresden07-min.jpg", 
     "dresden08-min.jpg", "dresden09-min.jpg", "flow-min.jpg", "flowermountain-min.jpg", "hemingway-min.jpg", 
     "lanterns-min.jpg", "lowforest-min.jpg", "nightcity-min.jpg", "path-min.jpg", "pinkbridge-min.jpg", 
     "rivercity-min.jpg", "road-min.jpg", "schneestrasse-min.jpg", "smogpark-min.jpg",
     "sunset-min.jpg", "sunshineonroad-min.jpg", "venicesunshine-min.jpg", "wintermountain-min.jpg"]
  end
  
  defp validThemes() do
    #dir = "#{__DIR__}/../../priv/static/themes/*.*"
    #arr = Path.wildcard(dir) |> Enum.map(&Path.basename/1)
    #IO.inspect(arr)
    #arr
    ["blue01","blue02","blue03","blue04","dark01","dark02", "dark03", 
     "dark04","dark05","green01","green02","green03","orkut","red01","red02","red03"]
  end
  
  defp validOrganizations() do
    ["mode01","mode02","mode03","mode04","mode05","mode06","mode07"]
  end
  
  defp validXImagePositions() do
  	["center","left","right"]
  end
  
  defp validYImagePositions() do
  	["center","top","bottom"]
  end
  
  defp validBackgroundPositions() do
    ["no-repeat","repeat"]
  end
  
end
