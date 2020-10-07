defmodule ExApp.AppThemeService do

  use ExApp.BaseServiceSecure
  alias ExApp.Config.DAOService
  alias ExApp.DateUtil
  alias ExApp.NumberUtil
  alias ExApp.ResultSetHandler
  alias ExApp.AppTheme
  
  def userIsOwner(userId) do
  	resultset = DAOService.load("select id from apptheme where ownerId = ? limit 1",[userId])
	(nil != resultset and resultset.num_rows > 0)
  end
  
  def loadById(id) do
    sql = """
	      select id, name, image, defaultTheme, themes, organization, imageHeight, positionX, positionY,
          backgroundWidth, backgroundHeight, backgroundRepeat, active, ownerId from apptheme where id = ? limit 1
	      """
	resultset = DAOService.load(sql,[id])
	cond do
      (nil == resultset or resultset.num_rows == 0) -> nil
      true -> getAppTheme(resultset)
    end
  end
  
  def create(paramValues) do
    sql = """
          insert into apptheme(name,image,defaultTheme,themes,organization,imageHeight,positionX,positionY,
          backgroundWidth,backgroundHeight,backgroundRepeat,active,ownerId,created_at) 
          values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)
	      """
    DAOService.insert(sql,paramValues ++ [DateUtil.getNowToSql(0,false,false)])
  end
  
  def update(id,paramValues) do
    sql = """
          update apptheme set name = ?, image = ?, defaultTheme = ?, themes = ?, organization = ?, 
          imageHeight = ?, positionX = ?, positionY = ?, backgroundWidth = ?, backgroundHeight = ?, 
          backgroundRepeat = ?, active = ?, updated_at = ? where id = ?
	      """
    DAOService.update(sql,paramValues ++ [DateUtil.getNowToSql(0,false,false),id])
  end
  
  def updateDependencies(_id,_apptheme) do
  	
  end
  
  def loadAll(page,rows,conditions,deletedAt,_mapParams) do
    limit = cond do
      (page > 0 and rows > 0) -> " limit #{((page - 1) * rows)},#{rows}"
      true -> ""
    end
    resultset = DAOService.load("select count(id) from apptheme where #{deletedAt} #{conditions}",[])
    total = NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,0,0))
    sql = """
          select id, name, image, defaultTheme, themes, organization, imageHeight, positionX, positionY,
          backgroundWidth, backgroundHeight, backgroundRepeat, active, ownerId 
          from apptheme where #{deletedAt} #{conditions} order by id asc
          #{limit}
          """
    resultset = DAOService.load(sql,[])
    cond do
      (resultset.num_rows == 0) -> [AppTheme.new(0,nil,nil,nil,nil,nil,0,nil,nil,0,0,nil,0,0,0)]
      true -> parseResults(resultset,total,[],0)
    end
  end
  
  def loadAllForPublic(_page,_rows,_conditions,deletedAt,mapParams) do
    loadAll(1,1,' and active = true ',deletedAt,mapParams)
  end
  
  def delete(id) do
    DAOService.update("update apptheme set active = false, deleted_at = ? where id = ?",[DateUtil.getNowToSql(0,false,false),id])
  end
  
  def unDrop(id) do
    DAOService.update("update apptheme set deleted_at = null where id = ?",[id])
  end
  
  def trullyDrop(id) do
    DAOService.delete("delete from apptheme where id = ?",[id])
  end
  
  def alreadyHasActive(id,deletedAt) do
    sql = "select id from apptheme where #{deletedAt} and id <> ? and active = true"
    resultset = DAOService.load(sql,[id])
    (nil != resultset and resultset.num_rows > 0)
  end
  
  defp parseResults(resultset,totalRows,arrayMap,row) do
    cond do
      (nil == resultset or resultset.num_rows == 0 or row >= resultset.num_rows) -> arrayMap
      true -> parseResults(resultset,totalRows,arrayMap ++ [getAppTheme(resultset,row,totalRows)],row + 1)
    end
  end
  
  defp getAppTheme(resultset,row \\ 0,totalRows \\ nil) do
    total = cond do
      (row == 0) -> totalRows
      true -> nil
    end
    AppTheme.new(NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,0)),
		         ResultSetHandler.getColumnValue(resultset,row,1),
		         ResultSetHandler.getColumnValue(resultset,row,2),
		         ResultSetHandler.getColumnValue(resultset,row,3),
		         ResultSetHandler.getColumnValue(resultset,row,4),
		         ResultSetHandler.getColumnValue(resultset,row,5),
		         NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,6)),
		         ResultSetHandler.getColumnValue(resultset,row,7),
		         ResultSetHandler.getColumnValue(resultset,row,8),
		         NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,9)),
 		         NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,10)),
		         ResultSetHandler.getColumnValue(resultset,row,11),
                 NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,12)),
                 NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,13)),
                 total)
  end
  
end

