export class AppTheme {
   constructor(
		       public id: number, 
		       public conditions: string, 
		       public name: string,
		       public image: string,
		       public defaultTheme: string,
		       public themes: string,
		       public organization: string,
		       public imageHeight: number,
		       public positionX: string,
		       public positionY: string,
		       public backgroundWidth: number,
		       public backgroundHeight: number,
		       public backgroundRepeat: string,
   			   public active: boolean,
   			   public ownerId: number,
   			   public _token: string,
   			   public objectClass: string
   			   ) { 
   }
}
