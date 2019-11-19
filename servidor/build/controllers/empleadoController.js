"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class EmpleadoController {
    /** SOLICITUDES */
    listarSolicitudes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cod_t_empleado = req.body.cod_t_empleado;
            const dominios = yield database_1.default.query("SELECT DOMINIO.cod_dominio, DOMINIO.nom_dominio," +
                "USUARIO.nombre, TICKET.descripcion, ESTADO.nom_estado FROM  TICKET, DOMINIO, USUARIO, " +
                "ESTADO, CLIENTE, REGISTRADOR WHERE DOMINIO.cedula=CLIENTE.cedula AND " +
                "DOMINIO.cod_registrador=REGISTRADOR.cod_registrador AND TICKET.cod_dominio=DOMINIO.cod_dominio " +
                "AND TICKET.cod_estado=ESTADO.cod_estado AND USUARIO.cedula=CLIENTE.cedula AND " +
                "ESTADO.cod_estado=1 AND TICKET.cod_t_ticket=" + cod_t_empleado);
            res.json(dominios);
        });
    }
    editarEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = req.body.respuesta;
            const cod_ticket = req.body.cod_ticket;
            console.log(req.body);
            yield database_1.default.query("UPDATE TICKET SET respuesta='" + respuesta + "' WHERE cod_ticket=" + cod_ticket);
            res.json({ text: 'Actualizando ticket ' + cod_ticket });
        });
    }
}
const empleadoController = new EmpleadoController();
exports.default = empleadoController;
