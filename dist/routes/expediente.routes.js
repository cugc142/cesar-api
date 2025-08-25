"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expediente_controller_1 = require("@controllers/expediente.controller");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /expedientes:
 *   get:
 *     summary: Listar todos los expedientes
 */
router.get("/", expediente_controller_1.getExpedientes);
/**
 * @openapi
 * /expedientes/{codigo}:
 *   get:
 *     summary: Obtener un expediente por código
 */
router.get("/:codigo", expediente_controller_1.obtenerExpedientePorCodigo);
/**
 * @openapi
 * /expedientes:
 *   post:
 *     summary: Crear un expediente
 */
router.post("/", expediente_controller_1.crearExpediente);
/**
 * @openapi
 * /expedientes/{codigo}:
 *   put:
 *     summary: Actualizar un expediente
 */
router.put("/:codigo", expediente_controller_1.actualizarExpediente);
/**
 * @openapi
 * /expedientes/{codigo}/activo:
 *   patch:
 *     summary: Activar o desactivar un expediente
 */
router.patch("/:codigo/activo", expediente_controller_1.activarExpediente);
/**
 * @openapi
 * /expedientes/{codigo}/estado:
 *   patch:
 *     summary: Cambiar el estado de un expediente
 */
router.patch("/:codigo/estado", expediente_controller_1.cambiarEstadoExpediente);
/**
 * @openapi
 * /expedientes/{codigo}:
 *   delete:
 *     summary: Eliminar un expediente
 */
router.delete("/:codigo", expediente_controller_1.eliminarExpediente);
exports.default = router;
