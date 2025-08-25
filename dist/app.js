"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const path_1 = __importDefault(require("path"));
const expediente_routes_1 = __importDefault(require("@routes/expediente.routes"));
const indicio_routes_1 = __importDefault(require("@routes/indicio.routes"));
const app = (0, express_1.default)();
// Middlewares
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Healthcheck
app.get("/health", (_req, res) => res.json({ ok: true }));
// Swagger
const swaggerSpec = (0, swagger_jsdoc_1.default)({
    definition: {
        openapi: "3.0.3",
        info: {
            title: "API Expedientes",
            version: "1.0.0",
            description: "Documentación de la API de Expedientes",
        },
        servers: [{ url: "http://localhost:" + (process.env.PORT || 3000) }],
    },
    // Busca anotaciones en dev (TS) y en build (JS)
    apis: [
        path_1.default.join(process.cwd(), "src/routes/*.ts"),
        path_1.default.join(process.cwd(), "dist/routes/*.js"),
    ],
});
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
// Rutas
app.use("/expedientes", expediente_routes_1.default);
app.use("/indicios", indicio_routes_1.default);
// 404
app.use((_req, res) => res.status(404).json({ message: "Ruta no encontrada" }));
// Error handler
app.use((err, _req, res, _next) => {
    console.error("❌ Error global:", err);
    res.status(500).json({ message: "Error interno del servidor" });
});
exports.default = app;
