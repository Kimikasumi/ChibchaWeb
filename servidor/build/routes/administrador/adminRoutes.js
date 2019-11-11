"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = __importDefault(require("../../controllers/administrador/adminController"));
class AdminRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/empleado', adminController_1.default.listarEmpleados);
        this.router.get('/empleado/:cedula', adminController_1.default.obtenerEmpleado);
        this.router.post('/empleado', adminController_1.default.crearEmpleado);
        this.router.put('/empleado/:cedula', adminController_1.default.editarEmpleado);
        this.router.delete('/empleado/:cedula', adminController_1.default.eliminarEmpleado);
        this.router.get('/distribuidor', adminController_1.default.listarEmpleados);
        this.router.get('/distribuidor/:cedula', adminController_1.default.obtenerEmpleado);
        this.router.post('/distribuidor', adminController_1.default.crearEmpleado);
        this.router.put('/distribuidor/:cedula', adminController_1.default.editarEmpleado);
        this.router.delete('/distribuidor/:cedula', adminController_1.default.eliminarEmpleado);
        this.router.get('/regDominio', adminController_1.default.listarEmpleados);
        this.router.get('/regDominio/:cedula', adminController_1.default.obtenerEmpleado);
        this.router.post('/regDominio', adminController_1.default.crearEmpleado);
        this.router.put('/regDominio/:cedula', adminController_1.default.editarEmpleado);
        this.router.delete('/distribuidor/:cedula', adminController_1.default.eliminarEmpleado);
    }
}
const adminRoutes = new AdminRoutes();
exports.default = adminRoutes.router;
