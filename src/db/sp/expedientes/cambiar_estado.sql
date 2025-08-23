-- =============================================
-- RUTA DEL ARCHIVO: src/db/sp/expedientes/cambiar_estado.sql
-- PROCEDIMIENTO: sp_Expedientes_CambiarEstado
-- =============================================
IF OBJECT_ID('sp_Expedientes_CambiarEstado', 'P') IS NOT NULL
    DROP PROCEDURE sp_Expedientes_CambiarEstado;
GO

CREATE PROCEDURE sp_Expedientes_CambiarEstado
    @id INT,
    @estado NVARCHAR(20),
    @aprobador_id INT,
    @justificacion NVARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE Expedientes
    SET estado = @estado,
        aprobador_id = @aprobador_id,
        fecha_estado = GETDATE(),
        justificacion = @justificacion
    WHERE id = @id AND activo = 1;

    SELECT * FROM Expedientes WHERE id = @id;
END
GO
