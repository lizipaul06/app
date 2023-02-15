import express, { Request, Response } from "express";
import * as VisitService from "./visits.service";
import { Visits } from "./visits.interface";
export const visitsRouter = express.Router();



visitsRouter.get("/", async (req: Request, res: Response) => {
	try {
		const visits: Visits = await VisitService.getVisits();
        if(visits){
            res.status(200).send(visits);

        }
		res.status(404).send("no visits  found");

	} catch (e) {
		res.status(500).send(e.message);
	}
});



