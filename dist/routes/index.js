"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./auth.routes"));
const expediente_routes_1 = __importDefault(require("./expediente.routes"));
const indicio_routes_1 = __importDefault(require("./indicio.routes"));
const usuario_routes_1 = __importDefault(require("./usuario.routes"));
const r = (0, express_1.Router)();
r.use('/auth', auth_routes_1.default);
r.use('/expedientes', expediente_routes_1.default);
r.use('/indicios', indicio_routes_1.default);
r.use('/usuarios', usuario_routes_1.default);
exports.default = r;
