"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = notFoundHandler;
exports.errorHandler = errorHandler;
function notFoundHandler(req, res) {
    res.status(404).json({ message: "Recurso no encontrado" });
}
// Puedes tipar `err` mejor con Error & { status?: number } si lo prefieres.
function errorHandler(err, req, res, _next) {
    const status = err?.status ?? 500;
    const code = err?.code;
    res.status(status).json({
        error: err?.message ?? "Error interno del servidor",
        code
    });
}
