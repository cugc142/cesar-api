import { Router } from 'express';
import { login } from '../controllers/auth.controller';
import { z } from 'zod';
import { validate } from '../middlewares/validate.middleware';

const router = Router();

const loginSchema = z.object({
  correo: z.string().email(),
  password: z.string().min(6),
});

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - correo
 *               - password
 *             properties:
 *               correo:
 *                 type: string
 *                 example: tecnico1@umg.edu
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Login exitoso
 */
router.post('/login', validate(loginSchema), login);

export default router;
