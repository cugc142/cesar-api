-- =============================================
-- RUTA DEL ARCHIVO: src/db/sp/indicios/crear.sql
-- PROCEDIMIENTO: sp_Indicios_Crear
-- =============================================
IF OBJECT_ID('sp_Indicios_Crear', 'P') IS NOT NULL
    DROP PROCEDURE sp_Indicios_Crear;
GO

CREATE PROCEDURE sp_Indicios_Crear
    @codigo NVARCHAR(50),
    @descripcion NVARCHAR(255),
    @peso DECIMAL(10,2),
    @color NVARCHAR(50),
    @tamano NVARCHAR(50),
    @expediente_id INT,
    @tecnico_id INT
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO Indicios (codigo, descripcion, peso, color, tamano, expediente_id, tecnico_id, activo)
    VALUES (@codigo, @descripcion, @peso, @color, @tamano, @expediente_id, @tecnico_id, 1);

    SELECT SCOPE_IDENTITY() AS nuevo_indicio_id;
END
GO
