defmodule ExApp.AppTheme do

   def new(id,name,image,defaultTheme,themes,organization,imageHeight,positionX,positionY,
           backgroundWidth,backgroundHeight,backgroundRepeat,active,ownerId,totalRows \\ nil) do
     cond do
       (nil == totalRows) -> newNoTotalRows(id,name,image,defaultTheme,themes,organization,imageHeight,positionX,positionY,
                                            backgroundWidth,backgroundHeight,backgroundRepeat,active,ownerId)
       true -> newTotalRows(id,name,image,defaultTheme,themes,organization,imageHeight,positionX,positionY,
                            backgroundWidth,backgroundHeight,backgroundRepeat,active,ownerId,totalRows)
     end
   end
     
   defp newNoTotalRows(id,name,image,defaultTheme,themes,organization,imageHeight,positionX,positionY,
                       backgroundWidth,backgroundHeight,backgroundRepeat,active,ownerId) do
     %{
       id: id,
       name: name,
       image: image,
       defaultTheme: defaultTheme,
       themes: themes,
       organization: organization,
       imageHeight: imageHeight,
       positionX: positionX,
       positionY: positionY,
       backgroundWidth: backgroundWidth,
       backgroundHeight: backgroundHeight,
       backgroundRepeat: backgroundRepeat,
       active: active,
       ownerId: ownerId
     }
   end
   
   defp newTotalRows(id,name,image,defaultTheme,themes,organization,imageHeight,positionX,positionY,
                     backgroundWidth,backgroundHeight,backgroundRepeat,active,ownerId,totalRows) do
     %{
       id: id,
       name: name,
       image: image,
       defaultTheme: defaultTheme,
       themes: themes,
       organization: organization,
       imageHeight: imageHeight,
       positionX: positionX,
       positionY: positionY,
       backgroundWidth: backgroundWidth,
       backgroundHeight: backgroundHeight,
       backgroundRepeat: backgroundRepeat,
       active: active,
       ownerId: ownerId,
       totalRows: totalRows
     }
   end
   
end