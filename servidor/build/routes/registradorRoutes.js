"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registradorController_1 = __importDefault(require("../controllers/registradorController"));
class RegistradorRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/dominio', registradorController_1.default.listarDominios);
        this.router.get('/dominio/:cod_dominio', registradorController_1.default.obtenerDominio);
        this.router.post('/dominio', registradorController_1.default.crearDominio);
        this.router.delete('/dominio/:cod_dominio', registradorController_1.default.eliminarDominio);
    }
}
const registradorRoutes = new RegistradorRoutes();
exports.default = registradorRoutes.router;
