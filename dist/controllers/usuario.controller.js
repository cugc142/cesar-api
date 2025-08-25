"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearUsuario = crearUsuario;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const db_1 = require("../db/db");
async function crearUsuario(req, res) {
    try {
        const { nombre, correo, password, rol = "tecnico" } = req.body;
        const hash = await bcryptjs_1.default.hash(password, 10);
        const rows = await (0, db_1.query)(`INSERT INTO usuarios (nombre, correo, password_hash, rol)
       VALUES ($1, $2, $3, $4)
       RETURNING id, nombre, correo, rol, activo, creado_en`, [nombre, correo, hash, rol]);
        res.status(201).json(rows[0]);
    }
    catch (e) {
        if (String(e.message || "").includes("duplicate key")) {
            return res.status(409).json({ message: "El correo ya está registrado" });
        }
        console.error("crearUsuario", e);
        res.status(500).json({ message: "Error al crear usuario" });
    }
}
