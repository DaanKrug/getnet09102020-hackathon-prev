defmodule ExApp.SupplyproductHandler do

  alias ExApp.SanitizerUtil
  alias ExApp.MessagesUtil
  alias ExApp.MapUtil
  alias ExApp.Supplyproduct
  alias ExApp.GenericValidator
  alias ExApp.SupplyproductValidator
  alias ExApp.SupplyproductService
  alias ExApp.ProductService
  alias ExApp.SupplyService
  
  
  def objectClassName() do
    "Insumo do Produto"
  end 
  
  def objectTableName() do
    "supplyproduct"
  end
  
  def accessCategories() do
    ["admin","admin_master","enroll"]
  end
  
  def accessCategoriesAuditor() do
    ["admin","admin_master","system_auditor","enroll"]
  end
  
  def validateToSave(mapParams) do
    a1_supplyid = SupplyproductValidator.getA1_supplyid(mapParams)
    a2_supplyname = SupplyproductValidator.getA2_supplyname(mapParams)
    a3_productid = SupplyproductValidator.getA3_productid(mapParams)
	ownerId = GenericValidator.getOwnerId(mapParams)
	params = [a2_supplyname]
	params2 = [a1_supplyid,a3_productid]
    cond do
      (!(ownerId > 0)) -> MessagesUtil.systemMessage(412)
      (SanitizerUtil.hasEmpty(params)) -> MessagesUtil.systemMessage(480,[objectClassName()])
      (SanitizerUtil.hasLessThan(params2,1)) -> MessagesUtil.systemMessage(480,[objectClassName()])
      (nil == SupplyService.loadById(a1_supplyid)) -> MessagesUtil.systemMessage(100317)
      (nil == ProductService.loadById(a3_productid)) -> MessagesUtil.systemMessage(100318)
      (SupplyproductService.alreadyExists(0,a1_supplyid,a3_productid)) 
        -> MessagesUtil.systemMessage(100321)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToUpdate(id,supplyproduct,mapParams) do
	ownerId = GenericValidator.getOwnerId(mapParams)
    cond do
      (SanitizerUtil.hasLessThan([id,ownerId],1) or nil == supplyproduct) 
        -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToDelete(id,supplyproduct) do
    cond do
      (!(id > 0) or nil == supplyproduct) -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToRestore(id,supplyproduct) do
    cond do
      (!(id > 0) or nil == supplyproduct) -> MessagesUtil.systemMessage(412)
      (SupplyproductService.alreadyExists(id,MapUtil.get(supplyproduct,:a1_supplyid),
                                          MapUtil.get(supplyproduct,:a3_productid))) 
        -> MessagesUtil.systemMessage(100321)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def save(mapParams,_escapedAuth) do
    a1_supplyid = SupplyproductValidator.getA1_supplyid(mapParams)
    a2_supplyname = SupplyproductValidator.getA2_supplyname(mapParams)
    a3_productid = SupplyproductValidator.getA3_productid(mapParams)
    a4_amount = SupplyproductValidator.getA4_amount(mapParams)
	ownerId = GenericValidator.getOwnerId(mapParams)
	params = [a1_supplyid,a2_supplyname,a3_productid,a4_amount,ownerId]
	newObject = Supplyproduct.new(0,a1_supplyid,a2_supplyname,a3_productid,a4_amount,ownerId)
    cond do
      (!(SupplyproductService.create(params))) 
        -> MessagesUtil.systemMessage(100315)
      true -> MessagesUtil.systemMessage(200,[newObject])
    end
  end
  
  def update(id,supplyproduct,mapParams) do
    a4_amount = SupplyproductValidator.getA4_amount(mapParams,MapUtil.get(supplyproduct,:a4_amount))
    params = [a4_amount]
    cond do
      (!(SupplyproductService.update(id,params))) 
        -> MessagesUtil.systemMessage(100316)
      true -> MessagesUtil.systemMessage(201)
    end
  end
  
end