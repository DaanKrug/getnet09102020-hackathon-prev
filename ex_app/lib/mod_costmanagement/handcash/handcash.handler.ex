defmodule ExApp.HandcashHandler do

  alias ExApp.SanitizerUtil
  alias ExApp.MessagesUtil
  alias ExApp.MapUtil
  alias ExApp.Handcash
  alias ExApp.GenericValidator
  alias ExApp.HandcashValidator
  alias ExApp.HandcashService
  
  
  def objectClassName() do
    "Lucro na M&atilde;o"
  end 
  
  def objectTableName() do
    "handcash"
  end
  
  def accessCategories() do
    ["admin","admin_master","enroll"]
  end
  
  def accessCategoriesAuditor() do
    ["admin","admin_master","system_auditor","enroll"]
  end
  
  def validateToSave(mapParams) do
    a1_name = HandcashValidator.getA1_name(mapParams)
    a3_reportdata = HandcashValidator.getA3_reportdata(mapParams)
	ownerId = GenericValidator.getOwnerId(mapParams)
	params = [a1_name,a3_reportdata]
    cond do
      (!(ownerId > 0)) -> MessagesUtil.systemMessage(412)
      (SanitizerUtil.hasEmpty(params)) 
        -> MessagesUtil.systemMessage(480,[objectClassName()])
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToUpdate(id,handcash,mapParams) do
	ownerId = GenericValidator.getOwnerId(mapParams)
    cond do
      (SanitizerUtil.hasLessThan([id,ownerId],1) or nil == handcash) 
        -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToDelete(id,handcash) do
    cond do
      (!(id > 0) or nil == handcash) -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToRestore(id,handcash) do
    cond do
      (!(id > 0) or nil == handcash) -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def save(mapParams,_escapedAuth) do
    a1_name = HandcashValidator.getA1_name(mapParams)
    a2_simulated = GenericValidator.getBool(mapParams,"a2_simulated",false)
    a3_reportdata = HandcashValidator.getA3_reportdata(mapParams)
	ownerId = GenericValidator.getOwnerId(mapParams)
	params = [a1_name,a2_simulated,a3_reportdata,ownerId]
	newObject = Handcash.new(0,a1_name,a2_simulated,a3_reportdata,ownerId)
    cond do
      (!(HandcashService.create(params))) 
        -> MessagesUtil.systemMessage(100322)
      true -> MessagesUtil.systemMessage(200,[newObject])
    end
  end
  
  def update(id,handcash,mapParams) do
    a1_name = HandcashValidator.getA1_name(mapParams,MapUtil.get(handcash,:a1_name))
    a2_simulated = GenericValidator.getBool(mapParams,"a2_simulated",MapUtil.get(handcash,:a2_simulated))
    a3_reportdata = HandcashValidator.getA3_reportdata(mapParams,MapUtil.get(handcash,:a3_reportdata))
    params = [a1_name,a2_simulated,a3_reportdata]
    cond do
      (!(HandcashService.update(id,params))) 
        -> MessagesUtil.systemMessage(100322)
      true -> MessagesUtil.systemMessage(201)
    end
  end
  
end