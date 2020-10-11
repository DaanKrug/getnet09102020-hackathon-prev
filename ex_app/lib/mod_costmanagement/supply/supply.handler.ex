defmodule ExApp.SupplyHandler do

  alias ExApp.SanitizerUtil
  alias ExApp.MessagesUtil
  alias ExApp.MapUtil
  alias ExApp.Supply
  alias ExApp.GenericValidator
  alias ExApp.SupplyValidator
  alias ExApp.SupplyService
 
  def objectClassName() do
    "Insumo"
  end 
  
  def objectTableName() do
    "supply"
  end
  
  def accessCategories() do
    ["admin","admin_master","enroll"]
  end
  
  def accessCategoriesAuditor() do
    ["admin","admin_master","system_auditor","enroll"]
  end
  
  def validateToSave(mapParams) do
    a1_name = SupplyValidator.getA1_name(mapParams)
    a2_value = SupplyValidator.getA2_valor(mapParams)
	ownerId = GenericValidator.getOwnerId(mapParams)
    cond do
      (!(ownerId > 0)) -> MessagesUtil.systemMessage(412)
      (SanitizerUtil.hasLessThan([a2_value],0)) -> MessagesUtil.systemMessage(480,[objectClassName()])
      (SanitizerUtil.hasEmpty([a1_name])) -> MessagesUtil.systemMessage(480,[objectClassName()])
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToUpdate(id,supply,mapParams) do
	ownerId = GenericValidator.getOwnerId(mapParams)
    cond do
      (SanitizerUtil.hasLessThan([id,ownerId],1) or nil == supply) 
        -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToDelete(id,supply) do
    cond do
      (!(id > 0) or nil == supply) -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToRestore(id,supply) do
    cond do
      (!(id > 0) or nil == supply) -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def save(mapParams,_escapedAuth) do
    a1_name = SupplyValidator.getA1_name(mapParams)
    a2_value = SupplyValidator.getA2_valor(mapParams)
	ownerId = GenericValidator.getOwnerId(mapParams)
	params = [a1_name,a2_value,ownerId]
	newObject = Supply.new(0,a1_name,a2_value,ownerId)
    cond do
      (!(SupplyService.create(params))) 
        -> MessagesUtil.systemMessage(100313)
      true -> MessagesUtil.systemMessage(200,[newObject])
    end
  end
  
  def update(id,supply,mapParams) do
    a1_name = SupplyValidator.getA1_name(mapParams,MapUtil.get(supply,:a1_name))
    a2_value = SupplyValidator.getA2_valor(mapParams,MapUtil.get(supply,:a2_value))
    params = [a1_name,a2_value]
    cond do
      (!(SupplyService.update(id,params))) 
        -> MessagesUtil.systemMessage(100314)
      true -> MessagesUtil.systemMessage(201)
    end
  end
  
end