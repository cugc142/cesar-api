import { Router } from "express";
import {
  getExpedientes, // 👈 este es el correcto
  obtenerExpedientePorCodigo,
  crearExpediente,
  actualizarExpediente,
  activarExpediente,
  cambiarEstadoExpediente,
  eliminarExpediente,
} from "@controllers/expediente.controller";

const router = Router();

/**
 * @openapi
 * /expedientes:
 *   get:
 *     summary: Listar todos los expedientes
 */
router.get("/", getExpedientes);

/**
 * @openapi
 * /expedientes/{codigo}:
 *   get:
 *     summary: Obtener un expediente por código
 */
router.get("/:codigo", obtenerExpedientePorCodigo);

/**
 * @openapi
 * /expedientes:
 *   post:
 *     summary: Crear un expediente
 */
router.post("/", crearExpediente);

/**
 * @openapi
 * /expedientes/{codigo}:
 *   put:
 *     summary: Actualizar un expediente
 */
router.put("/:codigo", actualizarExpediente);

/**
 * @openapi
 * /expedientes/{codigo}/activo:
 *   patch:
 *     summary: Activar o desactivar un expediente
 */
router.patch("/:codigo/activo", activarExpediente);

/**
 * @openapi
 * /expedientes/{codigo}/estado:
 *   patch:
 *     summary: Cambiar el estado de un expediente
 */
router.patch("/:codigo/estado", cambiarEstadoExpediente);

/**
 * @openapi
 * /expedientes/{codigo}:
 *   delete:
 *     summary: Eliminar un expediente
 */
router.delete("/:codigo", eliminarExpediente);

export default router;
