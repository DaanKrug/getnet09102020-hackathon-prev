defmodule ExApp.AppThemeHandler do

  alias ExApp.SanitizerUtil
  alias ExApp.MessagesUtil
  alias ExApp.MapUtil
  alias ExApp.AuthorizerUtil
  alias ExApp.AppThemeService
  alias ExApp.GenericValidator
  alias ExApp.AppThemeValidator
  alias ExApp.AppTheme
  
  def objectClassName() do
    "Tema da Aplicação"
  end
  
  def objectTableName() do
    "apptheme"
  end
  
  def accessCategories() do
    ["admin_master"]
  end
  
  def accessCategoriesAuditor() do
    ["admin_master"]
  end
  
  def validateToSave(mapParams) do
    name = AppThemeValidator.getName(mapParams)
    image = AppThemeValidator.getImage(mapParams)
    defaultTheme = AppThemeValidator.getDefaultTheme(mapParams)
	ownerId = GenericValidator.getOwnerId(mapParams)
    cond do
      (!(ownerId > 0)) -> MessagesUtil.systemMessage(412)
      (SanitizerUtil.hasEmpty([name,image,defaultTheme])) -> MessagesUtil.systemMessage(100050)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToUpdate(id,theme,mapParams) do
	ownerId = GenericValidator.getOwnerId(mapParams)
	activeOld = MapUtil.get(theme,:active)
	activeNew = GenericValidator.getBool(mapParams,"active",activeOld)
	deletedAt = AuthorizerUtil.getDeletedAt(nil,nil)
    cond do
      (SanitizerUtil.hasLessThan([id,ownerId],1) or nil == theme) -> MessagesUtil.systemMessage(412)
      (activeNew and activeNew != activeOld and AppThemeService.alreadyHasActive(id,deletedAt)) -> MessagesUtil.systemMessage(100053)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToDelete(id,theme) do
    cond do
      (!(id > 0) or nil == theme) -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToRestore(id,theme) do
    cond do
      (!(id > 0) or nil == theme) -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def save(mapParams,_escapedAuth) do
    name = AppThemeValidator.getName(mapParams)
    image = AppThemeValidator.getImage(mapParams)
    defaultTheme = AppThemeValidator.getDefaultTheme(mapParams)
    themes = AppThemeValidator.getThemes(mapParams)
    organization = AppThemeValidator.getOrganization(mapParams)
    imageHeight = AppThemeValidator.getImageHeight(mapParams)
    positionX = AppThemeValidator.getPositionX(mapParams)
    positionY = AppThemeValidator.getPositionY(mapParams)
    backgroundWidth = AppThemeValidator.getBackgroundWidth(mapParams)
    backgroundHeight = AppThemeValidator.getBackgroundHeight(mapParams)
    backgroundRepeat = AppThemeValidator.getBackgroundRepeat(mapParams) 
	ownerId = GenericValidator.getOwnerId(mapParams)
	params = [name,image,defaultTheme,themes,organization,imageHeight,positionX,positionY,
	          backgroundWidth,backgroundHeight,backgroundRepeat,false,ownerId]
	newAppTheme = AppTheme.new(0,name,image,defaultTheme,themes,organization,imageHeight,positionX,positionY,
                               backgroundWidth,backgroundHeight,backgroundRepeat,false,ownerId)
    cond do
      (!(AppThemeService.create(params))) -> MessagesUtil.systemMessage(100051)
      true -> MessagesUtil.systemMessage(200,[newAppTheme])
    end
  end
  
  def update(id,theme,mapParams) do
    name = AppThemeValidator.getName(mapParams,MapUtil.get(theme,:name))
    image = AppThemeValidator.getImage(mapParams,MapUtil.get(theme,:image))
    defaultTheme = AppThemeValidator.getDefaultTheme(mapParams,MapUtil.get(theme,:defaultTheme))
    themes = AppThemeValidator.getThemes(mapParams,MapUtil.get(theme,:themes))
    organization = AppThemeValidator.getOrganization(mapParams,MapUtil.get(theme,:organization))
    imageHeight = AppThemeValidator.getImageHeight(mapParams,MapUtil.get(theme,:imageHeight))
    positionX = AppThemeValidator.getPositionX(mapParams,MapUtil.get(theme,:positionX))
    positionY = AppThemeValidator.getPositionY(mapParams,MapUtil.get(theme,:positionY))
    backgroundWidth = AppThemeValidator.getBackgroundWidth(mapParams,MapUtil.get(theme,:backgroundWidth))
    backgroundHeight = AppThemeValidator.getBackgroundHeight(mapParams,MapUtil.get(theme,:backgroundHeight))
    backgroundRepeat = AppThemeValidator.getBackgroundRepeat(mapParams,MapUtil.get(theme,:backgroundRepeat)) 
    active = GenericValidator.getBool(mapParams,"active",MapUtil.get(theme,:active))
    params = [name,image,defaultTheme,themes,organization,imageHeight,positionX,positionY,
	          backgroundWidth,backgroundHeight,backgroundRepeat,active]
    cond do
      (!(AppThemeService.update(id,params))) -> MessagesUtil.systemMessage(100052)
      true -> MessagesUtil.systemMessage(201)
    end
  end
  
end
