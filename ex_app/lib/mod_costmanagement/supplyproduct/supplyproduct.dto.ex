defmodule ExApp.Supplyproduct do

  def new(id,a1_supplyid,a2_supplyname,a3_productid,a4_amount,ownerId,totalRows \\ nil) do
    cond do
      (nil == totalRows) -> newNoTotalRows(id,a1_supplyid,a2_supplyname,a3_productid,a4_amount,ownerId)
      true -> newTotalRows(id,a1_supplyid,a2_supplyname,a3_productid,a4_amount,ownerId,totalRows)
    end
  end
   
  defp newNoTotalRows(id,a1_supplyid,a2_supplyname,a3_productid,a4_amount,ownerId) do
    %{
      id: id,
      a1_supplyid: a1_supplyid,
      a2_supplyname: a2_supplyname,
      a3_productid: a3_productid,
      a4_amount: a4_amount,
      ownerId: ownerId
    }
  end
   
  defp newTotalRows(id,a1_supplyid,a2_supplyname,a3_productid,a4_amount,ownerId,totalRows) do
    %{
      id: id,
      a1_supplyid: a1_supplyid,
      a2_supplyname: a2_supplyname,
      a3_productid: a3_productid,
      a4_amount: a4_amount,
      ownerId: ownerId,
      totalRows: totalRows
    }
  end
   
end