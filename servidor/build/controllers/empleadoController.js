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
            const { cod_t_empleado } = req.params;
            const dominios = yield database_1.default.query("SELECT DOMINIO.cod_dominio, TICKET.cod_ticket, TICKET.cod_t_ticket, " +
                "DOMINIO.nom_dominio, DOMINIO.cedula, " +
                "USUARIO.nombre, TICKET.descripcion, ESTADO.nom_estado FROM  TICKET, DOMINIO, USUARIO, " +
                "ESTADO, CLIENTE, REGISTRADOR WHERE DOMINIO.cedula=CLIENTE.cedula AND " +
                "DOMINIO.cod_registrador=REGISTRADOR.cod_registrador AND TICKET.cod_dominio=DOMINIO.cod_dominio " +
                "AND TICKET.cod_estado=ESTADO.cod_estado AND USUARIO.cedula=CLIENTE.cedula AND CLIENTE.cedula = DOMINIO.cedula AND " +
                "ESTADO.cod_estado=1 AND TICKET.cod_t_ticket=" + cod_t_empleado);
            res.json(dominios);
        });
    }
    obtenerTicketBasico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_ticket } = req.params;
            const solicitud = yield database_1.default.query('SELECT \n' +
                '\tcliente.cedula, usuario.nombre, dominio.cod_dominio, dominio.nom_dominio,\n' +
                '\tpaquete.nom_paquete, planpago.nom_p_pago, ticket.descripcion \n' +
                'FROM \n' +
                '\tplanpago, cliente, paquete, dominio, ticket, usuario \n' +
                'WHERE \n' +
                '\tcliente.cod_p_pago = planpago.cod_p_pago AND \n' +
                '\tcliente.cedula = usuario.cedula AND\n' +
                '\tticket.cod_dominio = dominio.cod_dominio AND \n' +
                '\tdominio.cedula = cliente.cedula AND\t\n' +
                '\tcliente.cod_paquete = paquete.cod_paquete AND\n' +
                '\tdominio.cedula = cliente.cedula AND\n' +
                '\tdominio.cod_dominio = ticket.cod_dominio AND \n' +
                '\tusuario.cedula = cliente.cedula AND \n' +
                '\tticket.cod_ticket =' + cod_ticket + ';');
            if (solicitud.length > 0) {
                return res.json(solicitud[0]);
            }
            return res.status(404).json({ text: 'No existe la solicitud' });
        });
    }
    obtenerHoster(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_ticket } = req.params;
            const solicitud = yield database_1.default.query('SELECT\n' +
                '\tusuario.nombre,\n' +
                '\tticket.cod_registrador\n' +
                'FROM\n' +
                '\tusuario, ticket\n' +
                'WHERE\n' +
                '\tusuario.cedula = ticket.cod_registrador AND\n' +
                '\tticket.cod_ticket =' + cod_ticket + ';');
            if (solicitud.length > 0) {
                return res.json(solicitud[0]);
            }
            return res.status(404).json({ text: 'No existe la solicitud' });
        });
    }
    responderTicketErr(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_ticket, cedula } = req.params;
            console.log(req.body);
            yield database_1.default.query("UPDATE ticket SET respuesta='" + req.body.resp + "', cod_estado=4, cedula=" + cedula + " WHERE cod_ticket=?", [cod_ticket]);
            res.json({ text: 'Respondiendo Ticket ' + cod_ticket + ' ' + req.body.resp });
        });
    }
    responderTicketPqr(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_ticket, cedula } = req.params;
            console.log(req.body);
            yield database_1.default.query("UPDATE ticket, cliente SET ticket.respuesta='" + req.body.resp + "', ticket.cod_estado=4, " +
                "ticket.cedula=" + req.body.cedula + ", cliente.cod_p_pago=" + req.body.cod_p_pago + ", cliente.cod_paquete="
                + req.body.cod_paquete + " WHERE ticket.cod_ticket = " + cod_ticket + " AND cliente.cedula =?", [cedula]);
            res.json({ text: cedula + ' ' + cod_ticket + ' ' + req.body.resp + ' ' + req.body.cedula + ' ' + req.body.cod_p_pago + ' ' + req.body.cod_paquete });
        });
    }
    responderTicketDom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula, cod_ticket } = req.params;
            yield database_1.default.query("UPDATE ticket SET respuesta='" + req.body.resp + "', cod_estado=3, cedula=" + cedula + ", cod_registrador=" + req.body.cedula + " WHERE cod_ticket=?", [cod_ticket]);
            res.json({ text: 'Respondiendo Ticket ' + cod_ticket + ' ' + req.body.resp });
        });
    }
    obtenerSolicitud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_ticket, cod_t_empleado } = req.params;
            const solicitud = yield database_1.default.query("SELECT DOMINIO.cod_dominio, DOMINIO.nom_dominio," +
                "USUARIO.nombre, TICKET.descripcion, ESTADO.nom_estado FROM  TICKET, DOMINIO, USUARIO, " +
                "ESTADO, CLIENTE, REGISTRADOR WHERE DOMINIO.cedula=CLIENTE.cedula AND " +
                "DOMINIO.cod_registrador=REGISTRADOR.cod_registrador AND TICKET.cod_dominio=DOMINIO.cod_dominio " +
                "AND TICKET.cod_estado=ESTADO.cod_estado AND USUARIO.cedula=CLIENTE.cedula AND " +
                "ESTADO.cod_estado=1 AND TICKET.cod_t_ticket=" + cod_t_empleado + " AND TICKET.cod_ticket=" + cod_ticket);
            if (solicitud.length > 0) {
                return res.json(solicitud[0]);
            }
            return res.status(404).json({ text: 'No existe el dominio' });
        });
    }
    editarEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cedula = req.body.cedula;
            console.log(req.body);
            yield database_1.default.query("UPDATE USUARIO SET correo='" + req.body.correo + "', nombre='" + req.body.nombre + "' WHERE cedula=" + parseInt(cedula));
            res.json({ text: 'Actualizando empleado ' + req.params.cedula });
        });
    }
    responderTicketND(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cod_ticket = req.body.cod_ticket;
            console.log(req.body);
            yield database_1.default.query("UPDATE TICKET SET respuesta='" + req.body.respuesta + "', cod_estado=3, cod_empleado=" + req.body.cod_empleado + " WHERE cod_ticket=?", parseInt(cod_ticket));
            res.json({ text: 'Respondiendo Ticket ' + req.body.cod_ticket });
        });
    }
    obtenerRegistradores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const registradores = yield database_1.default.query("SELECT cod_registrador, nombre FROM REGISTRADOR, USUARIO WHERE USUARIO.cedula=REGISTRADOR.cod_registrador");
            res.json(registradores);
        });
    }
    responderTicketCH(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cod_ticket = req.body.cod_ticket;
            console.log(req.body);
            yield database_1.default.query("UPDATE TICKET SET respuesta='" + req.body.respuesta + "', cod_estado=3, " +
                "cedula=" + req.body.cedula + ", cod_registrador=" + req.body.cod_registrador + " WHERE cod_ticket=?", parseInt(cod_ticket));
            res.json({ text: 'Respondiendo Ticket ' + req.body.cod_ticket });
        });
    }
    responderTicketCPP(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cod_ticket = req.body.cod_ticket;
            console.log(req.body);
            yield database_1.default.query("UPDATE CLIENTE SET cod_p_pago=" + req.body.cod_p_pago + " WHERE cedula=" + req.body.cedula);
            yield database_1.default.query("UPDATE TICKET SET respuesta='" + req.body.respuesta + "', cod_estado=4, cod_empleado=" + req.body.cod_empleado + ", WHERE cod_ticket=?", parseInt(cod_ticket));
            res.json({ text: 'Respondiendo Ticket ' + req.body.cod_ticket });
        });
    }
    obtenerPlanesPago(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const planesPago = yield database_1.default.query("SELECT cod_p_pago, nom_p_pago FROM PLANPAGO");
            res.json(planesPago);
        });
    }
    responderTicketCP(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cod_ticket = req.body.cod_ticket;
            console.log(req.body);
            yield database_1.default.query("UPDATE CLIENTE SET cod_paquete=" + req.body.cod_paquete + " WHERE cedula=" + req.body.cedula);
            yield database_1.default.query("UPDATE TICKET SET respuesta='" + req.body.respuesta + "', cod_estado=4, cod_empleado=" + req.body.cod_empleado + ", WHERE cod_ticket=?", parseInt(cod_ticket));
            res.json({ text: 'Respondiendo Ticket ' + req.body.cod_ticket });
        });
    }
    obtenerPaquetes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paquetes = yield database_1.default.query("SELECT cod_paquete, nom_paquete FROM PAQUETE");
            res.json(paquetes);
        });
    }
}
const empleadoController = new EmpleadoController();
exports.default = empleadoController;
