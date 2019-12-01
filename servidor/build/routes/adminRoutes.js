"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = __importDefault(require("../controllers/adminController"));
class AdminRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/empleado/crear', adminController_1.default.crearEmpleado);
        this.router.get('/empleado', adminController_1.default.listarEmpleados);
        this.router.get('/empleado/:cedula/:cedulaEmpleado', adminController_1.default.obtenerEmpleado);
        this.router.put('/empleado/:cedula', adminController_1.default.editarEmpleado);
        this.router.delete('/empleado/:cedula', adminController_1.default.eliminarEmpleado);
        this.router.get('/distribuidor', adminController_1.default.listarDistribuidores);
        this.router.get('/distribuidor/:cedula/:cedulaDistribuidor', adminController_1.default.obtenerDistribuidor);
        this.router.post('/distribuidor', adminController_1.default.crearDistribuidor);
        this.router.put('/distribuidor/:cedula', adminController_1.default.editarDistribuidor);
        this.router.delete('/distribuidor/:cedula', adminController_1.default.eliminarDistribuidor);
        this.router.get('/distribuidor2/:cedula', adminController_1.default.obtenerCliDis);
        this.router.get('/registrador', adminController_1.default.listarRegistrador);
        this.router.get('/registrador/:cod_registrador/:cedulaRegistrador', adminController_1.default.obtenerRegistrador);
        this.router.post('/registrador', adminController_1.default.crearRegistrador);
        this.router.put('/registrador/:cod_registrador', adminController_1.default.editarRegistrador);
        this.router.delete('/registrador/:cod_registrador', adminController_1.default.eliminarRegistrador);
        this.router.get('/registrador/selPaises', adminController_1.default.selPaises);
        this.router.get("/perfilAdmin/:cedula", adminController_1.default.obtenerAdmin);
    }
}
const adminRoutes = new AdminRoutes();
exports.default = adminRoutes.router;
