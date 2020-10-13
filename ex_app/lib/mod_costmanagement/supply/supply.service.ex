defmodule ExApp.SupplyService do

  use ExApp.BaseServiceSecure
  alias ExApp.App.DAOService
  alias ExApp.DateUtil
  alias ExApp.MapUtil
  alias ExApp.NumberUtil
  alias ExApp.ResultSetHandler
  alias ExApp.Supply
  alias ExApp.SupplyproductService
  
  
  def loadById(id) do
    sql = """
	      select id, a1_name,
          a2_value,a3_un, ownerId from supply where id = ? limit 1
	      """
	resultset = DAOService.load(sql,[id])
	cond do
      (nil == resultset or resultset.num_rows == 0) -> nil
      true -> getSupply(resultset)
    end
  end
  
  def create(paramValues) do
    sql = """
          insert into supply(a1_name,
          a2_value,a3_un,ownerId,created_at) values (?,?,?,?,?)
	      """
    DAOService.insert(sql,paramValues ++ [DateUtil.getNowToSql(0,false,false)])
  end
  
  def update(id,paramValues) do
    sql = """
          update supply set a1_name = ?,
          a2_value = ?, 
          a3_un = ?, 
          updated_at = ? where id = ?
	      """
    DAOService.update(sql,paramValues ++ [DateUtil.getNowToSql(0,false,false),id])
  end
  
  def updateDependencies(id,supply) do
    SupplyproductService.updateBySupply(id,MapUtil.get(supply,:a1_name))
  end
  
  def loadAll(page,rows,conditions,deletedAt,_mapParams) do
    limit = cond do
      (page > 0 and rows > 0) -> " limit #{((page - 1) * rows)},#{rows}"
      true -> ""
    end
    sql = "select count(id) from supply where #{deletedAt} #{conditions}"
    resultset = DAOService.load(sql,[])
    total = NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,0,0))
    sql = """
          select id, a1_name,
          a2_value, 
          a3_un,
          ownerId from supply 
          where #{deletedAt} #{conditions} 
          order by id asc
          #{limit}
          """
    resultset = DAOService.load(sql,[])
    cond do
      (nil == resultset or resultset.num_rows == 0) -> [Supply.new(0,nil,0,0,0)]
      true -> parseResults(resultset,total,[],0) 
    end
  end
  
  def loadAllForPublic(_page,_rows,_conditions,_deletedAt,_mapParams) do
    [Supply.new(0,nil,0,0,0)]
  end
  
  def delete(id) do
    DAOService.update("update supply set deleted_at = ? where id = ?",
                      [DateUtil.getNowToSql(0,false,false),id])
  end
  
  def unDrop(id) do
    DAOService.update("update supply set deleted_at = null where id = ?",[id])
  end
  
  def trullyDrop(id) do
    DAOService.delete("delete from supply where id = ?",[id])
  end
  
  defp parseResults(resultset,totalRows,arrayMap,row) do
    cond do
      (nil == resultset or resultset.num_rows == 0 or row >= resultset.num_rows) -> arrayMap
      true -> parseResults(resultset,totalRows,
                           arrayMap ++ [getSupply(resultset,row,totalRows)],row + 1)
    end
  end
  
  defp getSupply(resultset,row \\ 0,totalRows \\ nil) do
    total = cond do
      (row == 0) -> totalRows
      true -> nil
    end
    Supply.new(NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,0)),
               ResultSetHandler.getColumnValue(resultset,row,1),
               NumberUtil.toFloat(ResultSetHandler.getColumnValue(resultset,row,2)),
               ResultSetHandler.getColumnValue(resultset,row,3),
               NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,4)),
               total)
  end
  
end