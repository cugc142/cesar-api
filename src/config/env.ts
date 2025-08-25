// src/config/env.ts
import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 4000,
  dbHost: process.env.PG_HOST || "localhost",
  dbPort: process.env.PG_PORT || "5432",
  dbUser: process.env.PG_USER || "postgres",
  dbPassword: process.env.PG_PASSWORD || "postgres",
  dbName: process.env.PG_DB || "expedientesdb",
};
