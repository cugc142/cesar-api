-- =============================================
-- RUTA DEL ARCHIVO: src/db/sp/expedientes/obtener.sql
-- PROCEDIMIENTO: sp_Expedientes_Obtener
-- =============================================
IF OBJECT_ID('sp_Expedientes_Obtener', 'P') IS NOT NULL
    DROP PROCEDURE sp_Expedientes_Obtener;
GO

CREATE PROCEDURE sp_Expedientes_Obtener
    @id INT
AS
BEGIN
    SET NOCOUNT ON;

    SELECT e.id, e.codigo, e.descripcion, e.estado,
           e.fecha_creacion, e.fecha_estado, e.justificacion,
           u.nombre AS tecnico, c.nombre AS aprobador
    FROM Expedientes e
    INNER JOIN Usuarios u ON e.tecnico_id = u.id
    LEFT JOIN Usuarios c ON e.aprobador_id = c.id
    WHERE e.id = @id AND e.activo = 1;
END
GO
