-- =============================================
-- RUTA DEL ARCHIVO: src/db/sp/expedientes/actualizar.sql
-- PROCEDIMIENTO: sp_Expedientes_Actualizar
-- =============================================
IF OBJECT_ID('sp_Expedientes_Actualizar', 'P') IS NOT NULL
    DROP PROCEDURE sp_Expedientes_Actualizar;
GO

CREATE PROCEDURE sp_Expedientes_Actualizar
    @id INT,
    @codigo NVARCHAR(50),
    @descripcion NVARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE Expedientes
    SET codigo = @codigo,
        descripcion = @descripcion
    WHERE id = @id AND activo = 1;

    SELECT * FROM Expedientes WHERE id = @id;
END
GO
