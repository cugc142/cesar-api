import express from "express";
import cors from "cors";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

import expedienteRoutes from "@routes/expediente.routes";
import indicioRoutes from "@routes/indicio.routes";

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Healthcheck
app.get("/health", (_req, res) => res.json({ ok: true }));

// Swagger
const swaggerSpec = swaggerJSDoc({
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
    path.join(process.cwd(), "src/routes/*.ts"),
    path.join(process.cwd(), "dist/routes/*.js"),
  ],
});
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas
app.use("/expedientes", expedienteRoutes);
app.use("/indicios", indicioRoutes);

// 404
app.use((_req, res) => res.status(404).json({ message: "Ruta no encontrada" }));

// Error handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error("❌ Error global:", err);
  res.status(500).json({ message: "Error interno del servidor" });
});

export default app;
