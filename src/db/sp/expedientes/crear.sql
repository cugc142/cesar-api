-- =============================================
-- RUTA DEL ARCHIVO: src/db/sp/expedientes/crear.sql
-- PROCEDIMIENTO: sp_Expedientes_Crear
-- =============================================
IF OBJECT_ID('sp_Expedientes_Crear', 'P') IS NOT NULL
    DROP PROCEDURE sp_Expedientes_Crear;
GO

CREATE PROCEDURE sp_Expedientes_Crear
    @codigo NVARCHAR(50),
    @descripcion NVARCHAR(255),
    @tecnico_id INT
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO Expedientes (codigo, descripcion, estado, tecnico_id, activo)
    VALUES (@codigo, @descripcion, 'pendiente', @tecnico_id, 1);

    SELECT SCOPE_IDENTITY() AS nuevo_expediente_id;
END
GO
