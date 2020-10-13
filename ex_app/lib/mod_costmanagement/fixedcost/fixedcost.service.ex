defmodule ExApp.FixedcostService do

  use ExApp.BaseServiceSecure
  alias ExApp.App.DAOService
  alias ExApp.DateUtil
  alias ExApp.NumberUtil
  alias ExApp.ResultSetHandler
  alias ExApp.Fixedcost
  
  def loadById(id) do
    sql = """
	      select id, a1_name,
          a2_value,a3_qtde, ownerId from fixedcost where id = ? limit 1
	      """
	resultset = DAOService.load(sql,[id])
	cond do
      (nil == resultset or resultset.num_rows == 0) -> nil
      true -> getFixedcost(resultset)
    end
  end
  
  def create(paramValues) do
    sql = """
          insert into fixedcost(a1_name,
          a2_value,a3_qtde,ownerId,created_at) values (?,?,?,?,?)
	      """
    DAOService.insert(sql,paramValues ++ [DateUtil.getNowToSql(0,false,false)])
  end
  
  def update(id,paramValues) do
    sql = """
          update fixedcost set a1_name = ?,
          a2_value = ?, a3_qtde = ?, updated_at = ? where id = ?
	      """
    DAOService.update(sql,paramValues ++ [DateUtil.getNowToSql(0,false,false),id])
  end
  
  def updateDependencies(_id,_fixedcost) do
  
  end
  
  def loadAll(page,rows,conditions,deletedAt,_mapParams) do
    limit = cond do
      (page > 0 and rows > 0) -> " limit #{((page - 1) * rows)},#{rows}"
      true -> ""
    end
    sql = "select count(id) from fixedcost where #{deletedAt} #{conditions}"
    resultset = DAOService.load(sql,[])
    total = NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,0,0))
    sql = """
          select id, a1_name,
          a2_value, 
          a3_qtde,
          ownerId from fixedcost 
          where #{deletedAt} #{conditions} 
          order by id asc
          #{limit}
          """
    resultset = DAOService.load(sql,[])
    cond do
      (nil == resultset or resultset.num_rows == 0) -> [Fixedcost.new(0,nil,0,0,0,0)]
      true -> parseResults(resultset,total,[],0) 
    end
  end
  
  def loadAllForPublic(_page,_rows,_conditions,_deletedAt,_mapParams) do
    [Fixedcost.new(0,nil,0,0,0,0)]
  end
  
  def delete(id) do
    DAOService.update("update fixedcost set deleted_at = ? where id = ?",
                      [DateUtil.getNowToSql(0,false,false),id])
  end
  
  def unDrop(id) do
    DAOService.update("update fixedcost set deleted_at = null where id = ?",[id])
  end
  
  def trullyDrop(id) do
    DAOService.delete("delete from fixedcost where id = ?",[id])
  end
  
  defp parseResults(resultset,totalRows,arrayMap,row) do
    cond do
      (nil == resultset or resultset.num_rows == 0 or row >= resultset.num_rows) -> arrayMap
      true -> parseResults(resultset,totalRows,
                           arrayMap ++ [getFixedcost(resultset,row,totalRows)],row + 1)
    end
  end
  
  defp getFixedcost(resultset,row \\ 0,totalRows \\ nil) do
    total = cond do
      (row == 0) -> totalRows
      true -> nil
    end
    Fixedcost.new(NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,0)),
                  ResultSetHandler.getColumnValue(resultset,row,1),
                  NumberUtil.toFloat(ResultSetHandler.getColumnValue(resultset,row,2)),
                  NumberUtil.toFloat(ResultSetHandler.getColumnValue(resultset,row,3)),
                  NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,4)),
                  total)
  end
  
end