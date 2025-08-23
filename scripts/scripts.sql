-- =============================================
-- MASTER SCRIPT
-- API Gestión de Expedientes e Indicios
-- Universidad Mariano Gálvez - 2025
-- =============================================

PRINT '=== CREANDO ESQUEMA ===';
:r .\schema.sql

PRINT '=== INSERTANDO USUARIOS SEMILLA ===';
:r .\seed.sql

PRINT '=== CREANDO SP USUARIOS ===';
:r ..\src\db\sp\usuarios\login.sql
:r ..\src\db\sp\usuarios\crear.sql

PRINT '=== CREANDO SP EXPEDIENTES ===';
:r ..\src\db\sp\expedientes\crear.sql
:r ..\src\db\sp\expedientes\listar.sql
:r ..\src\db\sp\expedientes\obtener.sql
:r ..\src\db\sp\expedientes\actualizar.sql
:r ..\src\db\sp\expedientes\cambiar_estado.sql
:r ..\src\db\sp\expedientes\activar_desactivar.sql

PRINT '=== CREANDO SP INDICIOS ===';
:r ..\src\db\sp\indicios\crear.sql
:r ..\src\db\sp\indicios\listar_por_expediente.sql
:r ..\src\db\sp\indicios\actualizar.sql
:r ..\src\db\sp\indicios\activar_desactivar.sql

PRINT '=== SCRIPT FINALIZADO CORRECTAMENTE ===';
