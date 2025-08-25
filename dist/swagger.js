"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = setupSwagger;
// src/docs/swagger.ts
const path_1 = __importDefault(require("path"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
function setupSwagger(app) {
    const swaggerSpec = (0, swagger_jsdoc_1.default)({
        definition: {
            openapi: '3.0.3',
            info: { title: 'API Expedientes e Indicios', version: '1.0.0' },
            servers: [{ url: 'http://localhost:3000' }],
            components: {
                securitySchemes: {
                    bearerAuth: {
                        type: 'http',
                        scheme: 'bearer',
                        bearerFormat: 'JWT',
                    },
                },
            },
            security: [{ bearerAuth: [] }], // lock por defecto
        },
        apis: [
            path_1.default.resolve(process.cwd(), 'src/**/*.routes.{ts,js}'),
            path_1.default.resolve(process.cwd(), 'src/app.{ts,js}'),
        ],
    });
    app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec, { explorer: true }));
}
