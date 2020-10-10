defmodule ExApp.CcategoryproductHandler do

  alias ExApp.SanitizerUtil
  alias ExApp.MessagesUtil
  alias ExApp.MapUtil
  alias ExApp.Ccategoryproduct
  alias ExApp.GenericValidator
  alias ExApp.CcategoryproductValidator
  alias ExApp.CcategoryproductService
  alias ExApp.ProductService
  
  def objectClassName() do
    "Categoria Produto"
  end 
  
  def objectTableName() do
    "ccategoryproduct"
  end
  
  def accessCategories() do
    ["admin","admin_master"]
  end
  
  def accessCategoriesAuditor() do
    ["admin","admin_master","system_auditor"]
  end
  
  def validateToSave(mapParams) do
    a1_name = CcategoryproductValidator.getA1_name(mapParams)
	ownerId = GenericValidator.getOwnerId(mapParams)
	params = [a1_name]
    cond do
      (!(ownerId > 0)) -> MessagesUtil.systemMessage(412)
      (SanitizerUtil.hasEmpty(params)) 
        -> MessagesUtil.systemMessage(480,[objectClassName()])
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToUpdate(id,ccategoryproduct,mapParams) do
	ownerId = GenericValidator.getOwnerId(mapParams)
    cond do
      (SanitizerUtil.hasLessThan([id,ownerId],1) or nil == ccategoryproduct) 
        -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToDelete(id,ccategoryproduct) do
    cond do
      (!(id > 0) or nil == ccategoryproduct) -> MessagesUtil.systemMessage(412)
      (ProductService.categoryProductIsIn(id)) -> MessagesUtil.systemMessage(100310)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToRestore(id,ccategoryproduct) do
    cond do
      (!(id > 0) or nil == ccategoryproduct) -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def save(mapParams,_escapedAuth) do
    a1_name = CcategoryproductValidator.getA1_name(mapParams)
	ownerId = GenericValidator.getOwnerId(mapParams)
	params = [a1_name,ownerId]
	newObject = Ccategoryproduct.new(0,a1_name,ownerId)
    cond do
      (!(CcategoryproductService.create(params))) 
        -> MessagesUtil.systemMessage(100303)
      true -> MessagesUtil.systemMessage(200,[newObject])
    end
  end
  
  def update(id,ccategoryproduct,mapParams) do
    a1_name = CcategoryproductValidator.getA1_name(mapParams,MapUtil.get(ccategoryproduct,:a1_name))
    params = [a1_name]
    cond do
      (!(CcategoryproductService.update(id,params))) 
        -> MessagesUtil.systemMessage(100304)
      true -> MessagesUtil.systemMessage(201)
    end
  end
  
end