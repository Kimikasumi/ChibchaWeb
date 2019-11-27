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
        this.router.post('/clientes', distribuidorController_1.default.crearCliente);
        this.router.delete('/clientes', distribuidorController_1.default.eliminarCliente);
    }
}
const distribuidorRoutes = new DistribuidorRoutes();
exports.default = distribuidorRoutes.router;
