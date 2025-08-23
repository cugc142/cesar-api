import 'express-serve-static-core';
declare module 'express-serve-static-core' {
  interface Request { user?: { id: number; username: string; rol: 'tecnico'|'coordinador' } }
}
// Extiende tipos de Express para incluir req.user
import 'express';

declare global {
  namespace Express {
    interface Request {
      user?: { id: string; rol: 'tecnico' | 'coordinador'; email?: string };
    }
  }
}

export {};