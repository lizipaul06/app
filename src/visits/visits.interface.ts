export interface Visit {
	visitId: number;
	startDateTime: number;
	endDateTime: number;
	supportWorkerId: number;
}

export interface Visits extends Array<Visit> {}
