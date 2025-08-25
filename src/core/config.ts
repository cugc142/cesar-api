import dotenv from "dotenv";

dotenv.config();

export default {
  DB_USER: process.env.DB_USER || "",
  DB_PASSWORD: process.env.DB_PASSWORD || "",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_NAME: process.env.DB_NAME || "",
  DB_PORT: process.env.DB_PORT || "1433",
  DB_ENCRYPT: process.env.DB_ENCRYPT || "true",
  DB_TRUST_CERT: process.env.DB_TRUST_CERT || "true",
  
};
