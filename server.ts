import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

import cors from "cors";

const app: Express = express();
const port = process.env.PORT;

import authRoutes from "./routes/auth.routes";

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`[SERVER]: Server started on http://localhost:${port}`);
});
