defmodule ExApp.ProductHandler do

  alias ExApp.SanitizerUtil
  alias ExApp.MessagesUtil
  alias ExApp.MapUtil
  alias ExApp.Product
  alias ExApp.GenericValidator
  alias ExApp.ProductValidator
  alias ExApp.ProductService
  alias ExApp.ImageService
  alias ExApp.CcategoryproductService
  
  
  def objectClassName() do
    "Produto"
  end 
  
  def objectTableName() do
    "product"
  end
  
  def accessCategories() do
    ["admin","admin_master","enroll"]
  end
  
  def accessCategoriesAuditor() do
    ["admin","admin_master","system_auditor","enroll"]
  end
  
  def validateToSave(mapParams) do
    a2_name = ProductValidator.getA2_name(mapParams)
    a3_description = ProductValidator.getA3_description(mapParams)
    a4_imageid = ProductValidator.getA4_imageid(mapParams)
    a6_categoryid = ProductValidator.getA6_categoryid(mapParams)
	ownerId = GenericValidator.getOwnerId(mapParams)
	params = [a2_name,a3_description]
    cond do
      (SanitizerUtil.hasLessThan([ownerId,a4_imageid,a6_categoryid],1)) 
        -> MessagesUtil.systemMessage(412)
      (SanitizerUtil.hasEmpty(params)) 
        -> MessagesUtil.systemMessage(480,[objectClassName()])
      (nil == ImageService.loadById(a4_imageid)) 
        -> MessagesUtil.systemMessage(100307)
      (nil == CcategoryproductService.loadById(a6_categoryid)) 
        -> MessagesUtil.systemMessage(100309)
      CcategoryproductService
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToUpdate(id,product,mapParams) do
	ownerId = GenericValidator.getOwnerId(mapParams)
    cond do
      (SanitizerUtil.hasLessThan([id,ownerId],1) or nil == product) -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToDelete(id,product) do
    cond do
      (!(id > 0) or nil == product) -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToRestore(id,product) do
    cond do
      (!(id > 0) or nil == product) -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def save(mapParams,_escapedAuth) do
    a2_name = ProductValidator.getA2_name(mapParams)
    a3_description = ProductValidator.getA3_description(mapParams)
    a4_imageid = ProductValidator.getA4_imageid(mapParams)
    a5_imagelink = ProductValidator.getA5_imagelink(mapParams)
    a6_categoryid = ProductValidator.getA6_categoryid(mapParams)
    a7_categoryname = ProductValidator.getA7_categoryname(mapParams)
	ownerId = GenericValidator.getOwnerId(mapParams)
	params = [a2_name,a3_description,a4_imageid,a5_imagelink,a6_categoryid,a7_categoryname,ownerId]
	newObject = Product.new(0,a2_name,a3_description,a4_imageid,a5_imagelink,
	                        a6_categoryid,a7_categoryname,ownerId)
    cond do
      (!(ProductService.create(params))) 
        -> MessagesUtil.systemMessage(100305)
      true -> MessagesUtil.systemMessage(200,[newObject])
    end
  end
  
  def update(id,product,mapParams) do
    a2_name = ProductValidator.getA2_name(mapParams,MapUtil.get(product,:a2_name))
    a3_description = ProductValidator.getA3_description(mapParams,MapUtil.get(product,:a3_description))
    a4_imageid = ProductValidator.getA4_imageid(mapParams,MapUtil.get(product,:a4_imageid))
    a5_imagelink = ProductValidator.getA5_imagelink(mapParams,MapUtil.get(product,:a5_imagelink))
    a6_categoryid = ProductValidator.getA6_categoryid(mapParams,MapUtil.get(product,:a6_categoryid))
    a7_categoryname = ProductValidator.getA7_categoryname(mapParams,MapUtil.get(product,:a7_categoryname))
    params = [a2_name,a3_description,a4_imageid,a5_imagelink,a6_categoryid,a7_categoryname]
    cond do
      (!(ProductService.update(id,params))) 
        -> MessagesUtil.systemMessage(100306)
      true -> MessagesUtil.systemMessage(201)
    end
  end
  
end