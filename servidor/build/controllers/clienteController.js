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
class ClienteController {
    crearCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("(" + parseInt(req.body.cedula) + ",'" + req.body.correo + "','" + req.body.nombre + "','" + req.body.contrasenia + "'," + parseInt(req.body.cod_t_usuario) + ")");
            yield database_1.default.query('INSERT INTO USUARIO VALUES (' + (+parseInt(req.body.cedula) + ",'" + req.body.correo + "','" + req.body.nombre + "','" + req.body.contrasenia + "'," + parseInt(req.body.cod_t_usuario) + ")"));
            res.json({ text: 'Cliente creado' });
        });
    }
    obtenerCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula } = req.params;
            const cliente = yield database_1.default.query("SELECT CLIENTE.cedula, planpago.nom_p_pago, PAQUETE.nom_paquete, USUARIO.correo, USUARIO.nombre, USUARIO.contrasenia, TARJETA.numero, date_format(tarjeta.fecha_vencimiento,'%Y-%m-%d') as fecha_vencimiento, TARJETA.cod_seguridad, T_TARJETA.nom_t_tarjeta FROM T_TARJETA, TARJETA, CLIENTE, PLANPAGO, PAQUETE, USUARIO WHERE T_TARJETA.cod_t_tarjeta = TARJETA.cod_t_tarjeta AND TARJETA.cod_tarjeta = CLIENTE.cod_tarjeta AND CLIENTE.cod_paquete = PAQUETE.cod_paquete AND CLIENTE.cod_p_pago = PLANPAGO.cod_p_pago AND USUARIO.cedula = CLIENTE.cedula AND CLIENTE.cedula = ?", cedula);
            if (cliente.length > 0) {
                return res.json(cliente[0]);
            }
            return res.status(404).json({ text: 'No existe el cliente' });
        });
    }
    editarCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula } = req.params;
            console.log(req.body);
            yield database_1.default.query("UPDATE USUARIO SET nombre='" + req.body.nombre + "' WHERE cedula=?", [cedula]);
            yield database_1.default.query("UPDATE USUARIO SET correo='" + req.body.correo + "' WHERE cedula=?", [cedula]);
            yield database_1.default.query("UPDATE USUARIO SET contrasenia='" + req.body.contrasenia + "' WHERE cedula=?", [cedula]);
            res.json({ text: 'Actualizando cliente ' });
        });
    }
    historialPQRCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula } = req.params;
            const cliente = yield database_1.default.query('SELECT TICKET.descripcion, TICKET.respuesta, T_TICKET.nom_t_ticket FROM USUARIO, CLIENTE, DOMINIO, TICKET, T_TICKET WHERE CLIENTE.cedula = DOMINIO.cedula AND DOMINIO.cod_dominio = TICKET.cod_dominio AND T_TICKET.cod_t_ticket = TICKET.cod_t_ticket  AND USUARIO.cedula = CLIENTE.cedula AND USUARIO.cedula=?', cedula);
            if (cliente.length > 0) {
                return res.json(cliente);
            }
            return res.status(404).json({ text: 'Historial de cliente obtenido ' });
        });
    }
    obtenerDominiosCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula } = req.params;
            const cliente = yield database_1.default.query('SELECT DOMINIO.cod_dominio, DOMINIO.nom_dominio, USUARIO.nombre FROM DOMINIO, CLIENTE, USUARIO, REGISTRADOR WHERE  DOMINIO.cedula = CLIENTE.cedula AND DOMINIO.cod_registrador = REGISTRADOR.cod_registrador AND USUARIO.cedula = REGISTRADOR.cod_registrador AND CLIENTE.cedula =?', cedula);
            if (cliente.length > 0) {
                return res.json(cliente);
            }
            return res.status(404).json({ text: 'Dominios cliente obtenidos ' });
        });
    }
    crearSolicitud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const aux = parseInt(req.body.cod_t_ticket);
            console.log(aux);
            yield database_1.default.query("INSERT INTO TICKET (cod_t_ticket, cod_dominio, cod_estado , descripcion, respuesta ,cedula, cod_registrador) VALUES (" + parseInt(req.body.cod_t_ticket) + "," + parseInt(req.body.cod_dominio) + ",1,'" + req.body.descripcion + "',NULL," + req.body.cedula + ",NULL)");
            res.json({ text: 'Solicitud creada' });
        });
    }
    crearDominio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query("INSERT INTO DOMINIO (cedula, nom_dominio, cod_registrador, descripcion) VALUES (" + req.params.cedula + ",'" + req.body.nom_dominio + "',0,'" + req.body.descripcion + "')");
            res.json({ text: 'Dominio Creado' });
        });
    }
    agregarTarjeta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO TARJETA (cod_t_tarjeta, numero, fecha_vencimiento, cod_seguridad) VALUES (' + (parseInt(req.body.nom_t_tarjeta) + "," + req.body.numero + ",'" + req.body.fecha_vencimiento + "'," + req.body.cod_seguridad + ")"));
            res.json({ text: 'se agregó la tarjeta con éxito' });
        });
    }
    obtenerTarjeta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula } = req.params;
            const cliente = yield database_1.default.query('SELECT CLIENTE.cedula, T_TARJETA.nom_t_tarjeta, TARJETA.numero, TARJETA.fecha_vencimiento, TARJETA.cod_seguridad FROM TARJETA, CLIENTE, T_TARJETA WHERE TARJETA.cod_tarjeta = CLIENTE.cod_tarjeta AND TARJETA.cod_t_tarjeta = T_TARJETA.cod_t_tarjeta AND CLIENTE.cedula=?', cedula);
            if (cliente.length > 0) {
                return res.json(cliente[0]);
            }
            return res.status(404).json({ text: 'No existe la tarjeta' });
        });
    }
}
const clienteController = new ClienteController();
exports.default = clienteController;
