"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteController_1 = __importDefault(require("../controllers/clienteController"));
class ClienteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/crear', clienteController_1.default.crearCliente);
        this.router.get('/:cedula', clienteController_1.default.obtenerCliente);
    }
}
const clienteRoutes = new ClienteRoutes();
exports.default = clienteRoutes.router;
