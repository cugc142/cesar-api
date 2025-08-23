-- =============================================
-- RUTA DEL ARCHIVO: src/db/sp/indicios/actualizar.sql
-- PROCEDIMIENTO: sp_Indicios_Actualizar
-- =============================================
IF OBJECT_ID('sp_Indicios_Actualizar', 'P') IS NOT NULL
    DROP PROCEDURE sp_Indicios_Actualizar;
GO

CREATE PROCEDURE sp_Indicios_Actualizar
    @id INT,
    @codigo NVARCHAR(50),
    @descripcion NVARCHAR(255),
    @peso DECIMAL(10,2),
    @color NVARCHAR(50),
    @tamano NVARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE Indicios
    SET codigo = @codigo,
        descripcion = @descripcion,
        peso = @peso,
        color = @color,
        tamano = @tamano
    WHERE id = @id AND activo = 1;

    SELECT * FROM Indicios WHERE id = @id;
END
GO
