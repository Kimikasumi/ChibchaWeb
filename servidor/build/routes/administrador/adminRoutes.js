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
        this.router.get('/distribuidor', adminController_1.default.listarDistribuidores);
        this.router.get('/distribuidor/:cedula', adminController_1.default.obtenerDistribuidor);
        this.router.post('/distribuidor', adminController_1.default.crearDistribuidor);
        this.router.put('/distribuidor/:cedula', adminController_1.default.editarDistribuidor);
        this.router.delete('/distribuidor/:cedula', adminController_1.default.eliminarDistribuidor);
        this.router.get('/registrador', adminController_1.default.listarRegistrador);
        this.router.get('/registrador/:cod_registrador', adminController_1.default.obtenerRegistrador);
        this.router.post('/registrador', adminController_1.default.crearRegistrador);
        this.router.put('/registrador/:cod_registrador', adminController_1.default.editarRegistrador);
        this.router.delete('/registrador/:cod_registrador', adminController_1.default.eliminarRegistrador);
    }
}
const adminRoutes = new AdminRoutes();
exports.default = adminRoutes.router;
