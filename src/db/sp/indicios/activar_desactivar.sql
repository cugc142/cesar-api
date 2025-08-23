-- =============================================
-- RUTA DEL ARCHIVO: src/db/sp/indicios/activar_desactivar.sql
-- PROCEDIMIENTO: sp_Indicios_ActivarDesactivar
-- =============================================
IF OBJECT_ID('sp_Indicios_ActivarDesactivar', 'P') IS NOT NULL
    DROP PROCEDURE sp_Indicios_ActivarDesactivar;
GO

CREATE PROCEDURE sp_Indicios_ActivarDesactivar
    @id INT,
    @activo BIT
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE Indicios
    SET activo = @activo
    WHERE id = @id;

    SELECT * FROM Indicios WHERE id = @id;
END
GO
