import { Visits } from "../visits/visits.interface";
import * as visitsService from "../visits/visits.service";
import {
	SupportWorkers,
	SupportWorker,
	SupportWorkerVisits,
} from "./supportWorkers.interface";

const supportWorkers: SupportWorkers = [
	{
		supportWorkerId: 1,

		contractedHours: 15,

		name: "Andrew",
	},
	{
		supportWorkerId: 2,

		contractedHours: 15,

		name: "Trudie",
	},
	{
		supportWorkerId: 3,

		contractedHours: 15,

		name: "Nicolas",

		avatar: "",
	},
];

export const getSupportWorkers = async (): Promise<SupportWorkers> =>
	Object.values(supportWorkers);

export const getSupportWorkerById = async (
	supportWorkerId: number
): Promise<SupportWorker> => {
	const [filteredSupportWorker] = Object.values(supportWorkers).filter(
		(supportWorker) => supportWorker.supportWorkerId == supportWorkerId
	);

	return filteredSupportWorker;
};

export const getSupportWorkerVisits = async (
	supportWorkerId: number
): Promise<SupportWorkerVisits> => {
	const visits: Visits = await visitsService.getVisitsBySupportWorkerId(
		supportWorkerId
	);
	const supportWorker: SupportWorker = await getSupportWorkerById(
		supportWorkerId
	);
	const { name, contractedHours } = supportWorker;
	const supportWorkerVisits: SupportWorkerVisits = visits.map(
		({ visitId, startDateTime, endDateTime, supportWorkerId }) => {
			const newVisit = {
				visitId,
				startDateTime,
				endDateTime,
				supportWorkerId,
				name,
				contractedHours,
			};

			return newVisit;
		}
	);
	const sortedSupportWorkerVisits: SupportWorkerVisits =
		supportWorkerVisits.sort(function (a, b) {
			return a.startDateTime - b.startDateTime;
		});
	return sortedSupportWorkerVisits;
};
