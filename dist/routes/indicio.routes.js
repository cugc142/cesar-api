"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indicio_controller_1 = require("@controllers/indicio.controller");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /indicios/expediente/{codigo}:
 *   get:
 *     summary: Listar indicios de un expediente
 */
router.get("/expediente/:codigo", indicio_controller_1.listarIndiciosPorExpediente);
/**
 * @openapi
 * /indicios:
 *   post:
 *     summary: Crear un nuevo indicio
 */
router.post("/", indicio_controller_1.crearIndicio);
/**
 * @openapi
 * /indicios/{id}:
 *   put:
 *     summary: Actualizar un indicio
 *   delete:
 *     summary: Eliminar un indicio
 */
router.put("/:id", indicio_controller_1.actualizarIndicio);
router.delete("/:id", indicio_controller_1.eliminarIndicio);
exports.default = router;
