export class Product {
	constructor(
		public id: number, 
		public conditions: string, 
		public a2_name: string,
		public a3_description: string,
		public a4_imageid: number,
		public a5_imagelink: number,
		public a6_categoryid: number,
		public a7_categoryname: string,
		public a8_disponibility: number,
		public a9_deliverytime: number,
		public a10_sellprice: number,
		public ownerId: number,
		public _token: string,
		public objectClass: string
	) { 
	}
}