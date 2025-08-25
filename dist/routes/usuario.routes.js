"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const zod_1 = require("zod");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const router = (0, express_1.Router)();
const usuarioSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(3),
    correo: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    rol: zod_1.z.enum(['tecnico', 'coordinador']),
});
/**
 * @openapi
 * /usuarios:
 *   post:
 *     summary: Crear usuario
 *     tags: [Usuarios]
 */
router.post('/', (0, validate_middleware_1.validate)(usuarioSchema), usuario_controller_1.crearUsuario);
exports.default = router;
