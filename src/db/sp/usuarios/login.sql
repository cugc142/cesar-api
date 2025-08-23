-- =============================================
-- RUTA DEL ARCHIVO: src/db/sp/usuarios/login.sql
-- PROCEDIMIENTO: sp_Usuarios_Login
-- =============================================
IF OBJECT_ID('sp_Usuarios_Login', 'P') IS NOT NULL
    DROP PROCEDURE sp_Usuarios_Login;
GO

CREATE PROCEDURE sp_Usuarios_Login
    @correo NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;

    SELECT id, nombre, correo, password_hash, rol, activo
    FROM Usuarios
    WHERE correo = @correo AND activo = 1;
END
GO
