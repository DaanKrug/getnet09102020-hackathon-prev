defmodule ExApp.SupplyproductService do

  use ExApp.BaseServiceSecure
  alias ExApp.App.DAOService
  alias ExApp.DateUtil
  alias ExApp.NumberUtil
  alias ExApp.AuthorizerUtil
  alias ExApp.ResultSetHandler
  alias ExApp.Supplyproduct
  
  def productIsIn(productId) do
    sql = "select id from supplyproduct where a3_productid = ? limit 1"
  	resultset = DAOService.load(sql,[productId])
	(nil != resultset and resultset.num_rows > 0)
  end
  
  def supplyIsIn(supplyId) do
    sql = "select id from supplyproduct where a1_supplyid = ? limit 1"
  	resultset = DAOService.load(sql,[supplyId])
	(nil != resultset and resultset.num_rows > 0)
  end
  
  def loadById(id) do
    sql = """
	      select id, a1_supplyid,
          a2_supplyname,
          a3_productid,
          a4_amount, ownerId from supplyproduct where id = ? limit 1
	      """
	resultset = DAOService.load(sql,[id])
	cond do
      (nil == resultset or resultset.num_rows == 0) -> nil
      true -> getSupplyproduct(resultset)
    end
  end
  
  def create(paramValues) do
    sql = """
          insert into supplyproduct(a1_supplyid,
          a2_supplyname,
          a3_productid,
          a4_amount,ownerId,created_at) values (?,?,?,?,?,?)
	      """
    DAOService.insert(sql,paramValues ++ [DateUtil.getNowToSql(0,false,false)])
  end
  
  def update(id,paramValues) do
    sql = """
          update supplyproduct set a4_amount = ?, updated_at = ? where id = ?
	      """
    DAOService.update(sql,paramValues ++ [DateUtil.getNowToSql(0,false,false),id])
  end
  
  def updateBySupply(supplyId,supplyName) do
    sql = """
          update supplyproduct set a2_supplyname = ? where a1_supplyid = ?
	      """
    DAOService.update(sql,[supplyName,supplyId])
  end
  
  def updateDependencies(_id,_supplyproduct) do
  
  end
  
  def loadAll(page,rows,conditions,deletedAt,_mapParams) do
    limit = cond do
      (page > 0 and rows > 0) -> " limit #{((page - 1) * rows)},#{rows}"
      true -> ""
    end
    sql = "select count(id) from supplyproduct where #{deletedAt} #{conditions}"
    resultset = DAOService.load(sql,[])
    total = NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,0,0))
    sql = """
          select id, a1_supplyid,
          a2_supplyname,
          a3_productid,
          a4_amount, 
          ownerId from supplyproduct 
          where #{deletedAt} #{conditions} 
          order by id asc
          #{limit}
          """
    resultset = DAOService.load(sql,[])
    cond do
      (nil == resultset or resultset.num_rows == 0) 
        -> [Supplyproduct.new(0,0,nil,0,0,0,0)]
      true -> parseResults(resultset,total,[],0) 
    end
  end
  
  def loadAllForPublic(_page,_rows,_conditions,_deletedAt,_mapParams) do
    [Supplyproduct.new(0,0,nil,0,0,0,0)]
  end
  
  def delete(id) do
    DAOService.update("update supplyproduct set deleted_at = ? where id = ?",
                      [DateUtil.getNowToSql(0,false,false),id])
  end
  
  def unDrop(id) do
    DAOService.update("update supplyproduct set deleted_at = null where id = ?",[id])
  end
  
  def trullyDrop(id) do
    DAOService.delete("delete from supplyproduct where id = ?",[id])
  end
  
  def alreadyExists(id,supplyId,productId) do
    sql = """
          select id from supplyproduct 
          where id <> ? and a1_supplyid = ? and a3_productid = ?
          and #{AuthorizerUtil.getDeletedAt(nil,nil)} 
          limit 1
          """
  	resultset = DAOService.load(sql,[id,supplyId,productId])
	(nil != resultset and resultset.num_rows > 0)
  end
  
  defp parseResults(resultset,totalRows,arrayMap,row) do
    cond do
      (nil == resultset or resultset.num_rows == 0 or row >= resultset.num_rows) -> arrayMap
      true -> parseResults(resultset,totalRows,
                           arrayMap ++ [getSupplyproduct(resultset,row,totalRows)],row + 1)
    end
  end
  
  defp getSupplyproduct(resultset,row \\ 0,totalRows \\ nil) do
    total = cond do
      (row == 0) -> totalRows
      true -> nil
    end
    Supplyproduct.new(NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,0)),
                      NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,1)),
                      ResultSetHandler.getColumnValue(resultset,row,2),
                      NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,3)),
                      NumberUtil.toFloat(ResultSetHandler.getColumnValue(resultset,row,4)),
                      NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,5)),
                      total)
  end
  
end