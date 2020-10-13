defmodule ExApp.Fixedcost do

  def new(id,a1_name,a2_value,a3_qtde,ownerId,totalRows \\ nil) do
    cond do
      (nil == totalRows) -> newNoTotalRows(id,a1_name,a2_value,a3_qtde,ownerId)
      true -> newTotalRows(id,a1_name,a2_value,a3_qtde,ownerId,totalRows)
    end
  end
   
  defp newNoTotalRows(id,a1_name,a2_value,a3_qtde,ownerId) do
    %{
      id: id,
      a1_name: a1_name,
      a2_value: a2_value,
      a3_qtde: a3_qtde,
      ownerId: ownerId
    }
  end
   
  defp newTotalRows(id,a1_name,a2_value,a3_qtde,ownerId,totalRows) do
    %{
      id: id,
      a1_name: a1_name,
      a2_value: a2_value,
      a3_qtde: a3_qtde,
      ownerId: ownerId,
      totalRows: totalRows
    }
  end
   
end