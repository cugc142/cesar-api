-- =============================================
-- RUTA DEL ARCHIVO: src/db/sp/indicios/listar_por_expediente.sql
-- PROCEDIMIENTO: sp_Indicios_ListarPorExpediente
-- =============================================
IF OBJECT_ID('sp_Indicios_ListarPorExpediente', 'P') IS NOT NULL
    DROP PROCEDURE sp_Indicios_ListarPorExpediente;
GO

CREATE PROCEDURE sp_Indicios_ListarPorExpediente
    @expediente_id INT
AS
BEGIN
    SET NOCOUNT ON;

    SELECT i.id, i.codigo, i.descripcion, i.peso, i.color, i.tamano,
           i.fecha_creacion, i.activo,
           u.nombre AS tecnico
    FROM Indicios i
    INNER JOIN Usuarios u ON i.tecnico_id = u.id
    WHERE i.expediente_id = @expediente_id AND i.activo = 1;
END
GO
