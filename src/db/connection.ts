// src/db/connection.ts
import config from "@core/config";

const dbConfig: sql.config = {
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  server: config.DB_HOST,
  database: config.DB_NAME,
  port: parseInt(config.DB_PORT, 10),
  options: {
    encrypt: config.DB_ENCRYPT === "true",
    trustServerCertificate: config.DB_TRUST_CERT === "true",
  },
};

export const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then(pool => {
    console.log("✅ Conectado a SQL Server");
    return pool;
  })
  .catch(err => {
    console.error("❌ Error al conectar a SQL Server:", err);
    throw err;
  });

export { sql };
