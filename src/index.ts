import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { visitsRouter } from "./visits/visits.router";
import { supportWorkersRouter } from "./supportWorkers/supportWorkers.router";

dotenv.config();


if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/visits", visitsRouter);
app.use("/api/support-workers", supportWorkersRouter);


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

