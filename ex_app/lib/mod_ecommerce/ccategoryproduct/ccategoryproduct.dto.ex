defmodule ExApp.Ccategoryproduct do

  def new(id,a1_name,ownerId,totalRows \\ nil) do
    cond do
      (nil == totalRows) -> newNoTotalRows(id,a1_name,ownerId)
      true -> newTotalRows(id,a1_name,ownerId,totalRows)
    end
  end
   
  defp newNoTotalRows(id,a1_name,ownerId) do
    %{
      id: id,
      a1_name: a1_name,
      ownerId: ownerId
    }
  end
   
  defp newTotalRows(id,a1_name,ownerId,totalRows) do
    %{
      id: id,
      a1_name: a1_name,
      ownerId: ownerId,
      totalRows: totalRows
    }
  end
   
end