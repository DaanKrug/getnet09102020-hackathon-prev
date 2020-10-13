export class Supplyproduct {
	constructor(
		public id: number, 
		public conditions: string, 
		public a1_supplyid: number,
		public a2_supplyname: string,
		public a3_productid: number,
		public a4_amount: number,
		public ownerId: number,
		public _token: string,
		public objectClass: string
	) { 
	}
}