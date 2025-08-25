# EXPEDIENTES
Creación de una Api

# UMG Expedientes API

API REST para la **Gestión de Expedientes e Indicios** desarrollada en **TypeScript + Express + SQL Server**, como parte de la tarea de la Universidad Mariano Gálvez (2025).

---

## 🚀 Tecnologías
- Node.js + TypeScript  
- Express.js  
- SQL Server (MSSQL)  
- JWT (Autenticación)  
- Swagger UI (Documentación)  
- Postman (Colección de pruebas)

---

## 📂 Estructura del proyecto─ server.ts # Bootstrap
expedientes
    src/
        auth/ # JWT utils y middlewares
        controllers/ # Controladores
        db/ # Conexión y SP helpers
        routes/ # Rutas Express
        swagger.ts # Config Swagger UI
        server.ts # Bootstrap

    scripts/
        schema.sql # Tablas
        seed.sql # Usuarios semilla
        scripts.sql # Maestro (ejecuta todo)

    postman_collection.json
    .env.example
    package.json
    tsconfig.json
    README.md
---

## ⚙️ Configuración


# Base de datos
DB_USER=sa
DB_PASSWORD=YourStrong!Passw0rd
DB_SERVER=localhost
DB_PORT=1433
DB_DATABASE=expedientes_db
DB_ENCRYPT=false
DB_TRUST_CERT=true

# JWT
JWT_SECRET=supersecreto
JWT_EXPIRES_IN=8h

# Server
PORT=3000

# Scripts de arranque
Instalar dependencias:
npm install
Cargar BD en SQL Server:
sqlcmd -S localhost -U sa -P YourStrong!Passw0rd -d master -i scripts/scripts.sql
Modo desarrollo:
npm run dev
Compilación + producción:
npm run build
npm start

# Usuarios semilla
Rol	Correo	Password
Técnico	tecnico1@umg.edu	password
Coordinador	coordinador1@umg.edu	password

# Documentación
API Base: http://localhost:3000/api
Swagger UI: http://localhost:3000/docs
Postman: importar postman_collection.json

# Ejemplos de uso
 Login
POST /api/auth/login
{
  "correo": "tecnico1@umg.edu",
  "password": "password"
}


