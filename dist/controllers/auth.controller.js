"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const db_1 = require("../db/db");
const jwt_utils_1 = require("../auth/jwt.utils");
async function login(req, res) {
    try {
        const { correo, password } = req.body;
        if (!correo || !password) {
            return res.status(400).json({ error: "correo y password requeridos" });
        }
        const users = await (0, db_1.query)("SELECT id, nombre, correo, password_hash, rol, activo FROM usuarios WHERE correo = $1 LIMIT 1", [correo]);
        const user = users[0];
        if (!user || !user.activo) {
            return res.status(401).json({ error: "Credenciales inválidas" });
        }
        const ok = await bcryptjs_1.default.compare(password, user.password_hash);
        if (!ok)
            return res.status(401).json({ error: "Credenciales inválidas" });
        const token = (0, jwt_utils_1.signToken)({
            id: user.id,
            nombre: user.nombre,
            correo: user.correo,
            rol: user.rol
        });
        res.json({ token, user: { id: user.id, nombre: user.nombre, correo: user.correo, rol: user.rol } });
    }
    catch (e) {
        console.error("login", e);
        res.status(500).json({ error: "Error interno" });
    }
}
