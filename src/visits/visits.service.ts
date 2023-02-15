import { Visits } from "./visits.interface";

const visits: Visits = [
	{
		visitId: 1,

		startDateTime: 1663405200000,

		endDateTime: 1663408800000,

		supportWorkerId: 1,
	},

	{
		visitId: 2,

		startDateTime: 1663405200000,

		endDateTime: 1663408800000,

		supportWorkerId: 2,
	},

	{
		visitId: 3,

		startDateTime: 1663405200000,

		endDateTime: 1663408800000,

		supportWorkerId: 3,
	},

	{
		visitId: 4,

		startDateTime: 1663405200000,

		endDateTime: 1663408800000,

		supportWorkerId: 1,
	},

	{
		visitId: 5,

		startDateTime: 1663405200000,

		endDateTime: 1663408800000,

		supportWorkerId: 2,
	},

	{
		visitId: 6,

		startDateTime: 1663405200000,

		endDateTime: 1663408800000,

		supportWorkerId: 3,
	},

	{
		visitId: 7,

		startDateTime: 1663405200000,

		endDateTime: 1663408800000,

		supportWorkerId: 1,
	},

	{
		visitId: 8,

		startDateTime: 1663405200000,

		endDateTime: 1663408800000,

		supportWorkerId: 2,
	},

	{
		visitId: 9,

		startDateTime: 1663405200000,

		endDateTime: 1663408800000,

		supportWorkerId: 3,
	},
];



export const getVisits = async (): Promise<Visits> => Object.values(visits);

export const getVisitsBySupportWorkerId = async (
	supportWorkerId: number
): Promise<Visits> => {
	return Object.values(visits).filter(
		(visit) => visit.supportWorkerId == supportWorkerId
	);
};
