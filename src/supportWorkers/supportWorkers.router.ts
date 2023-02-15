import express, { Request, Response } from "express";
import * as SupportWorkerService from "./supportWorkers.service";
import {
	SupportWorkers,
	SupportWorker,
	SupportWorkerVisits,
} from "./supportWorkers.interface";
export const supportWorkersRouter = express.Router();

supportWorkersRouter.get("/", async (req: Request, res: Response) => {
	try {
		const supportWorkers: SupportWorkers =
			await SupportWorkerService.getSupportWorkers();
		if (supportWorkers) {
			res.status(200).send(supportWorkers);
		}
		res.status(404).send("no support workers found");
	} catch (e) {
		res.status(500).send(e.message);
	}
});

supportWorkersRouter.get(
	"/:supportWorkerId",
	async (req: Request, res: Response) => {
		const supportWorkerId: number = parseInt(req.params.supportWorkerId);

		try {
			const supportWorker: SupportWorker =
				await SupportWorkerService.getSupportWorkerById(supportWorkerId);
			if (supportWorker) {
				res.status(200).send(supportWorker);
			}
			res.status(404).send("Support worker  not found");
		} catch (e) {
			res.status(500).send(e.message);
		}
	}
);

supportWorkersRouter.get(
	"/:supportWorkerId/visits",
	async (req: Request, res: Response) => {
		const supportWorkerId: number = parseInt(req.params.supportWorkerId);
		const supportWorkerVisits: SupportWorkerVisits =
			await SupportWorkerService.getSupportWorkerVisits(supportWorkerId);
		try {
			if (supportWorkerVisits) {
				return res.status(200).send(supportWorkerVisits);
			}

			res.status(404).send("no support worker visits  found");
		} catch (e) {
			res.status(500).send(e.message);
		}
	}
);
