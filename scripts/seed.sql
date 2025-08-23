-- =============================================
-- RUTA DEL ARCHIVO: scripts/seed.sql
-- USUARIOS SEMILLA PARA PRUEBAS
-- =============================================

-- Insertar usuario técnico
INSERT INTO Usuarios (nombre, correo, password_hash, rol, activo)
VALUES 
('Técnico 1', 'tecnico1@umg.edu', '$2b$12$qdgHJcccfREGPjiV5.AlHeAtEQ9rnBzSSOmniYu9tauWR6lpH8HIK', 'tecnico', 1);

-- Insertar usuario coordinador
INSERT INTO Usuarios (nombre, correo, password_hash, rol, activo)
VALUES 
('Coordinador 1', 'coordinador1@umg.edu', '$2b$12$qdgHJcccfREGPjiV5.AlHeAtEQ9rnBzSSOmniYu9tauWR6lpH8HIK', 'coordinador', 1);
