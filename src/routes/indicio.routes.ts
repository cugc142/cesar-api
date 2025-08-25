import { Router } from "express";
import {
  listarIndiciosPorExpediente,
  crearIndicio,
  actualizarIndicio,
  eliminarIndicio
} from "@controllers/indicio.controller";

const router = Router();

/**
 * @openapi
 * /indicios/expediente/{codigo}:
 *   get:
 *     summary: Listar indicios de un expediente
 */
router.get("/expediente/:codigo", listarIndiciosPorExpediente);

/**
 * @openapi
 * /indicios:
 *   post:
 *     summary: Crear un nuevo indicio
 */
router.post("/", crearIndicio);

/**
 * @openapi
 * /indicios/{id}:
 *   put:
 *     summary: Actualizar un indicio
 *   delete:
 *     summary: Eliminar un indicio
 */
router.put("/:id", actualizarIndicio);
router.delete("/:id", eliminarIndicio);

export default router;
