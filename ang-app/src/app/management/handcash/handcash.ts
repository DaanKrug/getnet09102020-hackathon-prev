export class Handcash {
	constructor(
		public id: number, 
		public conditions: string, 
		public a1_name: string,
		public a2_simulated: boolean,
		public a3_reportdata: string,
		public a2_simulatedLabel: string,
		public ownerId: number,
		public _token: string,
		public objectClass: string
	) { 
	}
}