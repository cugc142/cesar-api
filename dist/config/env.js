"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// src/config/env.ts
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    port: process.env.PORT || 4000,
    dbHost: process.env.PG_HOST || "localhost",
    dbPort: process.env.PG_PORT || "5432",
    dbUser: process.env.PG_USER || "postgres",
    dbPassword: process.env.PG_PASSWORD || "postgres",
    dbName: process.env.PG_DB || "expedientesdb",
};
