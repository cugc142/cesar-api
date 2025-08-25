import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { query } from "../db/db";
import { signToken } from "../auth/jwt.utils";

export async function login(req: Request, res: Response) {
  try {
    const { correo, password } = req.body;
    if (!correo || !password) {
      return res.status(400).json({ error: "correo y password requeridos" });
    }

    const users = await query<{ id:number; nombre:string; correo:string; password_hash:string; rol:string; activo:boolean }>(
      "SELECT id, nombre, correo, password_hash, rol, activo FROM usuarios WHERE correo = $1 LIMIT 1",
      [correo]
    );
    const user = users[0];
    if (!user || !user.activo) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: "Credenciales inválidas" });

    const token = signToken({
      id: user.id,
      nombre: user.nombre,
      correo: user.correo,
      rol: user.rol
    });

    res.json({ token, user: { id: user.id, nombre: user.nombre, correo: user.correo, rol: user.rol } });
  } catch (e) {
    console.error("login", e);
    res.status(500).json({ error: "Error interno" });
  }
}
