defmodule ExApp.FixedcostHandler do

  alias ExApp.SanitizerUtil
  alias ExApp.MessagesUtil
  alias ExApp.MapUtil
  alias ExApp.Fixedcost
  alias ExApp.GenericValidator
  alias ExApp.FixedcostValidator
  alias ExApp.FixedcostService
 
  def objectClassName() do
    "Custo Fixo"
  end 
  
  def objectTableName() do
    "fixedcost"
  end
  
  def accessCategories() do
    ["admin","admin_master","enroll"]
  end
  
  def accessCategoriesAuditor() do
    ["admin","admin_master","system_auditor","enroll"]
  end
  
  def validateToSave(mapParams) do
    a1_name = FixedcostValidator.getA1_name(mapParams)
    a2_value = FixedcostValidator.getA2_valor(mapParams)
	ownerId = GenericValidator.getOwnerId(mapParams)
    cond do
      (!(ownerId > 0)) -> MessagesUtil.systemMessage(412)
      (SanitizerUtil.hasLessThan([a2_value],0)) -> MessagesUtil.systemMessage(480,[objectClassName()])
      (SanitizerUtil.hasEmpty([a1_name])) -> MessagesUtil.systemMessage(480,[objectClassName()])
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToUpdate(id,fixedcost,mapParams) do
	ownerId = GenericValidator.getOwnerId(mapParams)
    cond do
      (SanitizerUtil.hasLessThan([id,ownerId],1) or nil == fixedcost) 
        -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToDelete(id,fixedcost) do
    cond do
      (!(id > 0) or nil == fixedcost) -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToRestore(id,fixedcost) do
    cond do
      (!(id > 0) or nil == fixedcost) -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def save(mapParams,_escapedAuth) do
    a1_name = FixedcostValidator.getA1_name(mapParams)
    a2_value = FixedcostValidator.getA2_valor(mapParams)
    a3_qtde = FixedcostValidator.getA3_qtde(mapParams)
	ownerId = GenericValidator.getOwnerId(mapParams)
	params = [a1_name,a2_value,a3_qtde,ownerId]
	newObject = Fixedcost.new(0,a1_name,a2_value,a3_qtde,ownerId)
    cond do
      (!(FixedcostService.create(params))) 
        -> MessagesUtil.systemMessage(100311)
      true -> MessagesUtil.systemMessage(200,[newObject])
    end
  end
  
  def update(id,fixedcost,mapParams) do
    a1_name = FixedcostValidator.getA1_name(mapParams,MapUtil.get(fixedcost,:a1_name))
    a2_value = FixedcostValidator.getA2_valor(mapParams,MapUtil.get(fixedcost,:a2_value))
    a3_qtde = FixedcostValidator.getA3_qtde(mapParams,MapUtil.get(fixedcost,:a3_qtde))
    params = [a1_name,a2_value,a3_qtde]
    cond do
      (!(FixedcostService.update(id,params))) 
        -> MessagesUtil.systemMessage(100312)
      true -> MessagesUtil.systemMessage(201)
    end
  end
  
end