import sql from "mssql";
// ...
export { sql }; // ✅ ahora puedes importarlo
import dotenv from "dotenv";

dotenv.config();

const dbConfig: sql.config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER || "localhost",
  port: Number(process.env.DB_PORT) || 1433,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: process.env.DB_ENCRYPT === "true",
    trustServerCertificate: process.env.DB_TRUST_CERT === "true",
  },
};

let pool: sql.ConnectionPool | null = null;

export async function getPool(): Promise<sql.ConnectionPool> {
  if (!pool) {
    pool = await sql.connect(dbConfig);
  }
  return pool;
}

export async function execProc<T = any>(
  procName: string,
  params: Record<string, any> = {}
): Promise<sql.IProcedureResult<T>> {
  const p = await getPool();
  let request = p.request();
  for (const key of Object.keys(params)) {
    request.input(key, params[key]);
  }
  return request.execute<T>(procName);
}
