"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const distribuidorController_1 = __importDefault(require("../controllers/distribuidorController"));
class DistribuidorRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/clientes/:cedula', distribuidorController_1.default.listarClientes);
        this.router.post('/clientes/:cedula', distribuidorController_1.default.crearCliente);
        this.router.delete('/clientes', distribuidorController_1.default.eliminarCliente);
        this.router.get('/solicitudes/:cedula', distribuidorController_1.default.historialPQRDistribuidor);
        this.router.get('/get/:cedula', distribuidorController_1.default.obtenerDistribuidor);
        this.router.put('/edit/:cedula', distribuidorController_1.default.editarDistribuidor);
        this.router.get('/clientes/dominios/:cedula', distribuidorController_1.default.obtenerDominiosDistribuidor);
        this.router.get('/clientes/dominios/registrador/:cedula/:cod_registrador', distribuidorController_1.default.obtenerRegistrador);
        this.router.post('/clientes/dominios/registrador/:cedula', distribuidorController_1.default.crearDominio);
        this.router.get('/clientes/dominios/select/:cedula', distribuidorController_1.default.selClientes);
    }
}
const distribuidorRoutes = new DistribuidorRoutes();
exports.default = distribuidorRoutes.router;
