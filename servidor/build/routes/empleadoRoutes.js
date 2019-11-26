"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleadoController_1 = __importDefault(require("../controllers/empleadoController"));
class EmpleadoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/ticket', empleadoController_1.default.listarSolicitudes);
        this.router.get('/ticket/get', empleadoController_1.default.obtenerSolicitud);
        this.router.put('/ticket/responderND', empleadoController_1.default.responderTicketND);
        this.router.put('/ticket/responderCH', empleadoController_1.default.responderTicketCH);
        this.router.put('/ticket/responderCPP', empleadoController_1.default.responderTicketCPP);
        this.router.put('/ticket/responderCP', empleadoController_1.default.responderTicketCP);
        this.router.put('/ticket/responderPQR', empleadoController_1.default.responderTicketPQR);
        this.router.get('/opciones/PlanesPago', empleadoController_1.default.obtenerPlanesPago);
        this.router.get('/opciones/Registradores', empleadoController_1.default.obtenerRegistradores);
        this.router.get('/opciones/Paquetes', empleadoController_1.default.obtenerPaquetes);
    }
}
const empleadoRoutes = new EmpleadoRoutes();
exports.default = empleadoRoutes.router;
