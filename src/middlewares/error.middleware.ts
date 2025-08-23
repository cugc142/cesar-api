// src/middlewares/error.middleware.ts
import type { Request, Response, NextFunction } from "express";

export function notFoundHandler(req: Request, res: Response) {
  res.status(404).json({ message: "Recurso no encontrado" });
}

// Puedes tipar `err` mejor con Error & { status?: number } si lo prefieres.
export function errorHandler(err: any, req: Request, res: Response, _next: NextFunction) {
  const status = err?.status ?? 500;
  const code = err?.code;
  res.status(status).json({
    error: err?.message ?? "Error interno del servidor",
    code
  });
}
