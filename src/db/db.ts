// src/db/db.ts
import { Pool, PoolClient } from "pg";
import dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
  host: process.env.PG_HOST ?? "localhost",
  port: Number(process.env.PG_PORT ?? 5432),
  user: process.env.PG_USER ?? "postgres",
  password: process.env.PG_PASSWORD ?? "postgres",
  database: process.env.PG_DB ?? "expedientesdb",
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

export async function testPg() {
  const { rows } = await pool.query("SELECT NOW() AS now");
  console.log("✅ PostgreSQL conectado:", rows[0].now);
}

export async function withTx<T>(fn: (c: PoolClient) => Promise<T>): Promise<T> {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const out = await fn(client);
    await client.query("COMMIT");
    return out;
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
}
