import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { execProc } from "../db/db";
import { signToken } from "../auth/jwt.utils";

export async function login(req: Request, res: Response) {
  const { correo, password } = req.body;

  if (!correo || !password) {
    return res.status(400).json({ error: "correo y password requeridos" });
  }

  const result = await execProc<any>("sp_Usuarios_Login", { correo });
  const user = result.recordset?.[0];

  if (!user) return res.status(401).json({ error: "Credenciales inválidas" });

  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) return res.status(401).json({ error: "Credenciales inválidas" });

  const token = signToken({
    id: user.id,
    nombre: user.nombre,
    correo: user.correo,
    rol: user.rol,
  });

  return res.json({
    token,
    user: { id: user.id, nombre: user.nombre, correo: user.correo, rol: user.rol },
  });
}
