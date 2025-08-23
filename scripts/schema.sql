-- =============================================
-- RUTA DEL ARCHIVO: scripts/schema.sql
-- CREACIÓN DE ESQUEMA DE BASE DE DATOS
-- API Gestión de Expedientes e Indicios
-- Universidad Mariano Gálvez - 2025
-- =============================================

-- Si las tablas existen, se eliminan primero (solo para desarrollo)
IF OBJECT_ID('dbo.Indicios', 'U') IS NOT NULL DROP TABLE dbo.Indicios;
IF OBJECT_ID('dbo.Expedientes', 'U') IS NOT NULL DROP TABLE dbo.Expedientes;
IF OBJECT_ID('dbo.Usuarios', 'U') IS NOT NULL DROP TABLE dbo.Usuarios;

-- =============================================
-- TABLA: Usuarios
-- =============================================
CREATE TABLE Usuarios (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre NVARCHAR(100) NOT NULL,
    correo NVARCHAR(100) NOT NULL UNIQUE,
    password_hash NVARCHAR(255) NOT NULL,
    rol NVARCHAR(20) NOT NULL CHECK (rol IN ('tecnico', 'coordinador')),
    activo BIT NOT NULL DEFAULT 1,
    fecha_creacion DATETIME NOT NULL DEFAULT GETDATE()
);

-- =============================================
-- TABLA: Expedientes
-- =============================================
CREATE TABLE Expedientes (
    id INT IDENTITY(1,1) PRIMARY KEY,
    codigo NVARCHAR(50) NOT NULL UNIQUE,
    descripcion NVARCHAR(255) NOT NULL,
    estado NVARCHAR(20) NOT NULL DEFAULT 'pendiente'
        CHECK (estado IN ('pendiente','aprobado','rechazado')),
    tecnico_id INT NOT NULL,
    aprobador_id INT NULL,
    fecha_creacion DATETIME NOT NULL DEFAULT GETDATE(),
    fecha_estado DATETIME NULL,
    justificacion NVARCHAR(255) NULL,
    activo BIT NOT NULL DEFAULT 1,
    CONSTRAINT FK_Expedientes_Tecnico FOREIGN KEY (tecnico_id) REFERENCES Usuarios(id),
    CONSTRAINT FK_Expedientes_Aprobador FOREIGN KEY (aprobador_id) REFERENCES Usuarios(id)
);

-- =============================================
-- TABLA: Indicios
-- =============================================
CREATE TABLE Indicios (
    id INT IDENTITY(1,1) PRIMARY KEY,
    codigo NVARCHAR(50) NOT NULL UNIQUE,
    descripcion NVARCHAR(255) NOT NULL,
    peso DECIMAL(10,2) NOT NULL CHECK (peso >= 0),
    color NVARCHAR(50) NULL,
    tamano NVARCHAR(50) NULL,
    expediente_id INT NOT NULL,
    tecnico_id INT NOT NULL,
    fecha_creacion DATETIME NOT NULL DEFAULT GETDATE(),
    activo BIT NOT NULL DEFAULT 1,
    CONSTRAINT FK_Indicios_Expediente FOREIGN KEY (expediente_id) REFERENCES Expedientes(id),
    CONSTRAINT FK_Indicios_Tecnico FOREIGN KEY (tecnico_id) REFERENCES Usuarios(id)
);
