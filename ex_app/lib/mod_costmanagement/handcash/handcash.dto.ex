defmodule ExApp.Handcash do

  def new(id,a1_name,a2_simulated,a3_reportdata,ownerId,totalRows \\ nil) do
    cond do
      (nil == totalRows) -> newNoTotalRows(id,a1_name,a2_simulated,a3_reportdata,ownerId)
      true -> newTotalRows(id,a1_name,a2_simulated,a3_reportdata,ownerId,totalRows)
    end
  end
   
  defp newNoTotalRows(id,a1_name,a2_simulated,a3_reportdata,ownerId) do
    %{
      id: id,
      a1_name: a1_name,
      a2_simulated: a2_simulated,
      a3_reportdata: a3_reportdata,
      ownerId: ownerId
    }
  end
   
  defp newTotalRows(id,a1_name,a2_simulated,a3_reportdata,ownerId,totalRows) do
    %{
      id: id,
      a1_name: a1_name,
      a2_simulated: a2_simulated,
      a3_reportdata: a3_reportdata,
      ownerId: ownerId,
      totalRows: totalRows
    }
  end
   
end