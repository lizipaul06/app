import { Visit } from "../visits/visits.interface";

export interface SupportWorker {
	supportWorkerId: number;
	contractedHours: number;
	name: string;
	avatar?: string;
}

export interface SupportWorkers extends Array<SupportWorker>{}

 interface SupportWorkerVisit extends Visit {
  name: string;
  contractedHours: number;
}

export interface SupportWorkerVisits extends Array<SupportWorkerVisit>{}