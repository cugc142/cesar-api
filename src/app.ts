import express from "express";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api", routes);

app.get("/", (_req, res) => res.send("API Expedientes OK"));

export default app;
