defmodule ExApp.Supply do

  def new(id,a1_name,a2_value,a3_un,ownerId,totalRows \\ nil) do
    cond do
      (nil == totalRows) -> newNoTotalRows(id,a1_name,a2_value,a3_un,ownerId)
      true -> newTotalRows(id,a1_name,a2_value,a3_un,ownerId,totalRows)
    end
  end
   
  defp newNoTotalRows(id,a1_name,a2_value,a3_un,ownerId) do
    %{
      id: id,
      a1_name: a1_name,
      a2_value: a2_value,
      a3_un: a3_un,
      ownerId: ownerId
    }
  end
   
  defp newTotalRows(id,a1_name,a2_value,a3_un,ownerId,totalRows) do
    %{
      id: id,
      a1_name: a1_name,
      a2_value: a2_value,
      a3_un: a3_un,
      ownerId: ownerId,
      totalRows: totalRows
    }
  end
   
end