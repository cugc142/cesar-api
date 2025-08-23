-- =============================================
-- PROCEDIMIENTO: sp_Expedientes_Listar
-- Listado con paginación y filtros
-- =============================================
IF OBJECT_ID('sp_Expedientes_Listar', 'P') IS NOT NULL
    DROP PROCEDURE sp_Expedientes_Listar;
GO

CREATE PROCEDURE sp_Expedientes_Listar
    @page INT = 1,
    @pageSize INT = 10,
    @estado NVARCHAR(20) = NULL,
    @codigo NVARCHAR(50) = NULL
AS
BEGIN
    SET NOCOUNT ON;

    WITH ExpedientesCTE AS (
        SELECT 
            e.id, e.codigo, e.descripcion, e.estado,
            e.fecha_creacion, e.fecha_estado, e.justificacion,
            u.nombre AS tecnico, c.nombre AS aprobador,
            ROW_NUMBER() OVER (ORDER BY e.fecha_creacion DESC) AS RowNum
        FROM Expedientes e
        INNER JOIN Usuarios u ON e.tecnico_id = u.id
        LEFT JOIN Usuarios c ON e.aprobador_id = c.id
        WHERE e.activo = 1
          AND (@estado IS NULL OR e.estado = @estado)
          AND (@codigo IS NULL OR e.codigo LIKE '%' + @codigo + '%')
    )
    SELECT *
    FROM ExpedientesCTE
    WHERE RowNum BETWEEN ((@page - 1) * @pageSize + 1) AND (@page * @pageSize);

    -- total para paginación
    SELECT COUNT(*) AS total
    FROM Expedientes e
    WHERE e.activo = 1
      AND (@estado IS NULL OR e.estado = @estado)
      AND (@codigo IS NULL OR e.codigo LIKE '%' + @codigo + '%');
END
GO
