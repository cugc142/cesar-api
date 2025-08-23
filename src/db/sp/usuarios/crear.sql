-- =============================================
-- RUTA DEL ARCHIVO: src/db/sp/usuarios/crear.sql
-- PROCEDIMIENTO: sp_Usuarios_Crear
-- =============================================
IF OBJECT_ID('sp_Usuarios_Crear', 'P') IS NOT NULL
    DROP PROCEDURE sp_Usuarios_Crear;
GO

CREATE PROCEDURE sp_Usuarios_Crear
    @nombre NVARCHAR(100),
    @correo NVARCHAR(100),
    @password_hash NVARCHAR(255),
    @rol NVARCHAR(20)
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO Usuarios (nombre, correo, password_hash, rol, activo)
    VALUES (@nombre, @correo, @password_hash, @rol, 1);

    SELECT SCOPE_IDENTITY() AS nuevo_usuario_id;
END
GO
