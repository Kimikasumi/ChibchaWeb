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
        this.router.post('/dominio/get', registradorController_1.default.obtenerDominio);
        this.router.put('/dominio/aceptar', registradorController_1.default.aceptarDominio);
        this.router.put('/dominio/rechazar', registradorController_1.default.rechazarDominio);
        this.router.put('/dominio/aceptar/:cod_registrador/:cod_ticket/:cod_dominio', registradorController_1.default.aceptarDominio);
        this.router.put('/dominio/rechazar/:cod_registrador/:cod_ticket/:cod_dominio', registradorController_1.default.rechazarDominio);
        this.router.put('/dominio/delete', registradorController_1.default.eliminarDominio);
        this.router.put('/dominio/perfil', registradorController_1.default.editarRegistrador);
        this.router.get('/solicitudes/:cod_registrador', registradorController_1.default.listarSolicitudes);
        this.router.get('/solicitudes/:cod_registrador/:cod_ticket', registradorController_1.default.obtenerSolicitud);
    }
}
const registradorRoutes = new RegistradorRoutes();
exports.default = registradorRoutes.router;
