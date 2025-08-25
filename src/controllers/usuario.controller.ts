import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { query } from "../db/db";

export async function crearUsuario(req: Request, res: Response) {
  try {
    const { nombre, correo, password, rol = "tecnico" } = req.body;
    const hash = await bcrypt.hash(password, 10);

    const rows = await query(
      `INSERT INTO usuarios (nombre, correo, password_hash, rol)
       VALUES ($1, $2, $3, $4)
       RETURNING id, nombre, correo, rol, activo, creado_en`,
      [nombre, correo, hash, rol]
    );
    res.status(201).json(rows[0]);
  } catch (e: any) {
    if (String(e.message || "").includes("duplicate key")) {
      return res.status(409).json({ message: "El correo ya está registrado" });
    }
    console.error("crearUsuario", e);
    res.status(500).json({ message: "Error al crear usuario" });
  }
}
