"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signToken = signToken;
exports.verifyToken = verifyToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secret = process.env.JWT_SECRET || "default-secret";
// usamos string | number (ej: "8h", "1d" o 3600)
const expiresIn = (process.env.JWT_EXPIRES_IN || "8h");
function signToken(payload) {
    const options = { expiresIn };
    return jsonwebtoken_1.default.sign(payload, secret, options);
}
function verifyToken(token) {
    return jsonwebtoken_1.default.verify(token, secret);
}
