defmodule ExApp.ProductService do

  use ExApp.BaseServiceSecure
  alias ExApp.App.DAOService
  alias ExApp.DateUtil
  alias ExApp.NumberUtil
  alias ExApp.ResultSetHandler
  alias ExApp.Product
  
  
  def categoryProductIsIn(categoryProductId) do
    sql = "select id from product where a6_categoryid = ? limit 1"
  	resultset = DAOService.load(sql,[categoryProductId])
	(nil != resultset and resultset.num_rows > 0)
  end
  
  def imageIsIn(imageId) do
  	resultset = DAOService.load("select id from product where a4_imageid = ? limit 1",[imageId])
	(nil != resultset and resultset.num_rows > 0)
  end
  
  def loadById(id) do
    sql = """
	      select id,
          a2_name,
          a3_description,
          a4_imageid, 
          a5_imagelink,
          a6_categoryid,
          a7_categoryname,
          ownerId from product where id = ? limit 1
	      """
	resultset = DAOService.load(sql,[id])
	cond do
      (nil == resultset or resultset.num_rows == 0) -> nil
      true -> getProduct(resultset)
    end
  end
  
  def create(paramValues) do
    sql = """
          insert into product(a2_name,
          a3_description,
          a4_imageid,
          a5_imagelink,
          a6_categoryid,
          a7_categoryname,
          ownerId,created_at) values (?,?,?,?,?,?,?,?)
	      """
    DAOService.insert(sql,paramValues ++ [DateUtil.getNowToSql(0,false,false)])
  end
  
  def update(id,paramValues) do
    sql = """
          update product set a2_name = ?,
          a3_description = ?,
          a4_imageid = ?, 
          a5_imagelink = ?,
          a6_categoryid = ?,
          a7_categoryname = ?,
          updated_at = ? where id = ?
	      """
    DAOService.update(sql,paramValues ++ [DateUtil.getNowToSql(0,false,false),id])
  end
  
  def updateDependencies(_id,_product) do
  
  end
  
  def loadAll(page,rows,conditions,deletedAt,_mapParams) do
    limit = cond do
      (page > 0 and rows > 0) -> " limit #{((page - 1) * rows)},#{rows}"
      true -> ""
    end
    sql = "select count(id) from product where #{deletedAt} #{conditions}"
    resultset = DAOService.load(sql,[])
    total = NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,0,0))
    sql = """
          select id,
          a2_name,
          a3_description,
          a4_imageid, 
          a5_imagelink,
          a6_categoryid,
          a7_categoryname,
          ownerId from product 
          where #{deletedAt} #{conditions} 
          order by id asc
          #{limit}
          """
    resultset = DAOService.load(sql,[])
    cond do
      (nil == resultset or resultset.num_rows == 0) 
        -> [Product.new(0,nil,nil,0,nil,0,nil,0,0)]
      true -> parseResults(resultset,total,[],0) 
    end
  end
  
  def loadAllForPublic(page,rows,conditions,deletedAt,_mapParams) do
    limit = cond do
      (page > 0 and rows > 0) -> " limit #{((page - 1) * rows)},#{rows}"
      true -> ""
    end
    sql = "select count(id) from product where #{deletedAt} #{conditions}"
    resultset = DAOService.load(sql,[])
    total = NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,0,0))
    sql = """
          select id,
          a2_name,
          a3_description,
          0 as a4_imageid, 
          a5_imagelink,
          a6_categoryid,
          a7_categoryname,
          0 as ownerId from product 
          where #{deletedAt} #{conditions} 
          order by id asc
          #{limit}
          """
    resultset = DAOService.load(sql,[])
    cond do
      (nil == resultset or resultset.num_rows == 0) 
        -> [Product.new(0,nil,nil,0,nil,0,nil,0,0)]
      true -> parseResults(resultset,total,[],0) 
    end
  end
  
  def delete(id) do
    DAOService.update("update product set deleted_at = ? where id = ?",
                      [DateUtil.getNowToSql(0,false,false),id])
  end
  
  def unDrop(id) do
    DAOService.update("update product set deleted_at = null where id = ?",[id])
  end
  
  def trullyDrop(id) do
    DAOService.delete("delete from product where id = ?",[id])
  end
  
  defp parseResults(resultset,totalRows,arrayMap,row) do
    cond do
      (nil == resultset or resultset.num_rows == 0 or row >= resultset.num_rows) -> arrayMap
      true -> parseResults(resultset,totalRows,
                           arrayMap ++ [getProduct(resultset,row,totalRows)],row + 1)
    end
  end
  
  defp getProduct(resultset,row \\ 0,totalRows \\ nil) do
    total = cond do
      (row == 0) -> totalRows
      true -> nil
    end
    Product.new(NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,0)),
                ResultSetHandler.getColumnValue(resultset,row,1),
                ResultSetHandler.getColumnValue(resultset,row,2),
                NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,3)),
                ResultSetHandler.getColumnValue(resultset,row,4),
                NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,5)),
                ResultSetHandler.getColumnValue(resultset,row,6),
                NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,7)),
                total)
  end
  
end