export class Fixedcost {
	constructor(
		public id: number, 
		public conditions: string, 
		public a1_name: string,
		public a2_value: number,
		public a2_valueLabel: string,
		public ownerId: number,
		public _token: string,
		public objectClass: string
	) { 
	}
}