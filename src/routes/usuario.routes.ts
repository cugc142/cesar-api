import { Router } from 'express';
import { crearUsuario } from '../controllers/usuario.controller';
import { z } from 'zod';
import { validate } from '../middlewares/validate.middleware';

const router = Router();

const usuarioSchema = z.object({
  nombre: z.string().min(3),
  correo: z.string().email(),
  password: z.string().min(6),
  rol: z.enum(['tecnico', 'coordinador']),
});

/**
 * @openapi
 * /usuarios:
 *   post:
 *     summary: Crear usuario
 *     tags: [Usuarios]
 */
router.post('/', validate(usuarioSchema), crearUsuario);

export default router;
