-- =============================================
-- RUTA DEL ARCHIVO: src/db/sp/expedientes/activar_desactivar.sql
-- PROCEDIMIENTO: sp_Expedientes_ActivarDesactivar
-- =============================================
IF OBJECT_ID('sp_Expedientes_ActivarDesactivar', 'P') IS NOT NULL
    DROP PROCEDURE sp_Expedientes_ActivarDesactivar;
GO

CREATE PROCEDURE sp_Expedientes_ActivarDesactivar
    @id INT,
    @activo BIT
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE Expedientes
    SET activo = @activo
    WHERE id = @id;

    SELECT * FROM Expedientes WHERE id = @id;
END
GO
