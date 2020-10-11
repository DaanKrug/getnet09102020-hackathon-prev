defmodule ExApp.Product do

  def new(id,a2_name,a3_description,a4_imageid,a5_imagelink,
          a6_categoryid,a7_categoryname,
          a8_disponibility,a9_deliverytime,a10_sellprice,
          ownerId,totalRows \\ nil) do
    cond do
      (nil == totalRows) -> newNoTotalRows(id,a2_name,a3_description,a4_imageid,a5_imagelink,
                                           a6_categoryid,a7_categoryname,
                                           a8_disponibility,a9_deliverytime,a10_sellprice,ownerId)
      true -> newTotalRows(id,a2_name,a3_description,a4_imageid,a5_imagelink,
                           a6_categoryid,a7_categoryname,a8_disponibility,a9_deliverytime,a10_sellprice,
                           ownerId,totalRows)
    end
  end
   
  defp newNoTotalRows(id,a2_name,a3_description,a4_imageid,a5_imagelink,
                      a6_categoryid,a7_categoryname,a8_disponibility,
                      a9_deliverytime,a10_sellprice,ownerId) do
    %{
      id: id,
      a2_name: a2_name,
      a3_description: a3_description,
      a4_imageid: a4_imageid,
      a5_imagelink: a5_imagelink,
      a6_categoryid: a6_categoryid,
      a7_categoryname: a7_categoryname,
      a8_disponibility: a8_disponibility,
      a9_deliverytime: a9_deliverytime,
      a10_sellprice: a10_sellprice,
      ownerId: ownerId
    }
  end
   
  defp newTotalRows(id,a2_name,a3_description,a4_imageid,a5_imagelink,
                    a6_categoryid,a7_categoryname,a8_disponibility,
                    a9_deliverytime,a10_sellprice,ownerId,totalRows) do
    %{
      id: id,
      a2_name: a2_name,
      a3_description: a3_description,
      a4_imageid: a4_imageid,
      a5_imagelink: a5_imagelink,
      a6_categoryid: a6_categoryid,
      a7_categoryname: a7_categoryname,
      a8_disponibility: a8_disponibility,
      a9_deliverytime: a9_deliverytime,
      a10_sellprice: a10_sellprice,
      ownerId: ownerId,
      totalRows: totalRows
    }
  end
   
end