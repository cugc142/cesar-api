"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sql = exports.poolPromise = void 0;
// src/db/connection.ts
const config_1 = __importDefault(require("@core/config"));
const dbConfig = {
    user: config_1.default.DB_USER,
    password: config_1.default.DB_PASSWORD,
    server: config_1.default.DB_HOST,
    database: config_1.default.DB_NAME,
    port: parseInt(config_1.default.DB_PORT, 10),
    options: {
        encrypt: config_1.default.DB_ENCRYPT === "true",
        trustServerCertificate: config_1.default.DB_TRUST_CERT === "true",
    },
};
exports.poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => {
    console.log("✅ Conectado a SQL Server");
    return pool;
})
    .catch(err => {
    console.error("❌ Error al conectar a SQL Server:", err);
    throw err;
});
