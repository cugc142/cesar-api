import { Request, Response } from "express";
import { query } from "../db/db";

export async function listarPorExpediente(req: Request, res: Response) {
  try {
    const expedienteId = Number(req.params.id || req.params.codigo || req.params.expedienteId);
    const rows = await query(
      `SELECT id, codigo, descripcion, peso, color, tamano, expediente_id, activo, creado_en
       FROM indicios
       WHERE expediente_id = $1
       ORDER BY creado_en DESC`,
      [expedienteId]
    );
    res.json(rows);
  } catch (e) {
    console.error("listarPorExpediente", e);
    res.status(500).json({ message: "Error al listar indicios" });
  }
}

export async function crear(req: Request, res: Response) {
  try {
    const { codigo, descripcion, peso, color, tamano, expediente_id } = req.body;
    const rows = await query(
      `INSERT INTO indicios (codigo, descripcion, peso, color, tamano, expediente_id)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, codigo, descripcion, peso, color, tamano, expediente_id, activo, creado_en`,
      [codigo, descripcion ?? null, peso ?? 0, color ?? null, tamano ?? null, Number(expediente_id)]
    );
    res.status(201).json(rows[0]);
  } catch (e) {
    console.error("crear indicio", e);
    res.status(500).json({ message: "Error al crear indicio" });
  }
}

export async function actualizar(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { codigo, descripcion, peso, color, tamano, expediente_id } = req.body;
    const rows = await query(
      `UPDATE indicios
         SET codigo = COALESCE($2, codigo),
             descripcion = COALESCE($3, descripcion),
             peso = COALESCE($4, peso),
             color = COALESCE($5, color),
             tamano = COALESCE($6, tamano),
             expediente_id = COALESCE($7, expediente_id)
       WHERE id = $1
       RETURNING id, codigo, descripcion, peso, color, tamano, expediente_id, activo, creado_en`,
      [id, codigo ?? null, descripcion ?? null, peso ?? null, color ?? null, tamano ?? null, expediente_id ?? null]
    );
    if (!rows[0]) return res.status(404).json({ message: "No encontrado" });
    res.json(rows[0]);
  } catch (e) {
    console.error("actualizar indicio", e);
    res.status(500).json({ message: "Error al actualizar indicio" });
  }
}

export async function activar(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { activo } = req.body as { activo: boolean };
    const rows = await query(
      `UPDATE indicios SET activo = $2
       WHERE id = $1
       RETURNING id, codigo, descripcion, peso, color, tamano, expediente_id, activo, creado_en`,
      [id, Boolean(activo)]
    );
    if (!rows[0]) return res.status(404).json({ message: "No encontrado" });
    res.json(rows[0]);
  } catch (e) {
    console.error("activar/desactivar indicio", e);
    res.status(500).json({ message: "Error al activar/desactivar" });
  }
}
