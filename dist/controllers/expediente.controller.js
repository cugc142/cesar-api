"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarExpediente = exports.cambiarEstadoExpediente = exports.activarExpediente = exports.actualizarExpediente = exports.crearExpediente = exports.obtenerExpedientePorCodigo = exports.getExpedientes = void 0;
// importa tu modelo si ya lo tienes
// import Expediente from "@models/expediente.model";
const getExpedientes = async (req, res) => {
    try {
        // 👇 aquí va tu lógica real para obtener expedientes de la DB
        // const expedientes = await Expediente.findAll();
        const expedientes = [
            { codigo: "EXP001", nombre: "Expediente 1" },
            { codigo: "EXP002", nombre: "Expediente 2" }
        ];
        res.json(expedientes);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener expedientes", error });
    }
};
exports.getExpedientes = getExpedientes;
const obtenerExpedientePorCodigo = async (req, res) => {
    const { codigo } = req.params;
    try {
        // const expediente = await Expediente.findByPk(codigo);
        const expediente = { codigo, nombre: "Ejemplo de expediente" };
        if (!expediente) {
            return res.status(404).json({ message: "Expediente no encontrado" });
        }
        res.json(expediente);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener expediente", error });
    }
};
exports.obtenerExpedientePorCodigo = obtenerExpedientePorCodigo;
const crearExpediente = async (req, res) => {
    try {
        // const nuevo = await Expediente.create(req.body);
        const nuevo = req.body;
        res.status(201).json(nuevo);
    }
    catch (error) {
        res.status(500).json({ message: "Error al crear expediente", error });
    }
};
exports.crearExpediente = crearExpediente;
const actualizarExpediente = async (req, res) => {
    const { codigo } = req.params;
    try {
        // await Expediente.update(req.body, { where: { codigo } });
        res.json({ message: `Expediente ${codigo} actualizado` });
    }
    catch (error) {
        res.status(500).json({ message: "Error al actualizar expediente", error });
    }
};
exports.actualizarExpediente = actualizarExpediente;
const activarExpediente = async (req, res) => {
    const { codigo } = req.params;
    try {
        res.json({ message: `Expediente ${codigo} activado/desactivado` });
    }
    catch (error) {
        res.status(500).json({ message: "Error al cambiar activo", error });
    }
};
exports.activarExpediente = activarExpediente;
const cambiarEstadoExpediente = async (req, res) => {
    const { codigo } = req.params;
    try {
        res.json({ message: `Estado de expediente ${codigo} cambiado` });
    }
    catch (error) {
        res.status(500).json({ message: "Error al cambiar estado", error });
    }
};
exports.cambiarEstadoExpediente = cambiarEstadoExpediente;
const eliminarExpediente = async (req, res) => {
    const { codigo } = req.params;
    try {
        res.json({ message: `Expediente ${codigo} eliminado` });
    }
    catch (error) {
        res.status(500).json({ message: "Error al eliminar expediente", error });
    }
};
exports.eliminarExpediente = eliminarExpediente;
