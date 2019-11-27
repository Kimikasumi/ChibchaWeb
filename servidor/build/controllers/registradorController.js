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
class RegistradorController {
    /** DOMINIOS */
    listarSolicitudes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_registrador } = req.params;
            console.log(cod_registrador);
            const cod_ticket = req.body.cod_ticket;
            const solicitudes = yield database_1.default.query("SELECT TICKET.cod_ticket, DOMINIO.cod_dominio, DOMINIO.nom_dominio," +
                "DOMINIO.descripcion as DomDescrip, USUARIO.nombre, TICKET.descripcion, ESTADO.nom_estado FROM  TICKET, DOMINIO, USUARIO," +
                "ESTADO, CLIENTE WHERE DOMINIO.cedula=CLIENTE.cedula AND " +
                "TICKET.cod_dominio=DOMINIO.cod_dominio " +
                "AND TICKET.cod_estado=ESTADO.cod_estado AND USUARIO.cedula=CLIENTE.cedula AND " +
                "ESTADO.cod_estado=3 AND TICKET.cod_registrador=?", [cod_registrador]);
            res.json(solicitudes);
        });
    }
    obtenerSolicitud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_ticket, cod_registrador } = req.params;
            console.log(req.params);
            const solicitud = yield database_1.default.query("SELECT DOMINIO.cod_dominio, DOMINIO.nom_dominio," +
                "USUARIO.nombre, TICKET.descripcion,  ESTADO.nom_estado  FROM  TICKET, DOMINIO, USUARIO, " +
                "CLIENTE, REGISTRADOR, ESTADO WHERE DOMINIO.cedula=CLIENTE.cedula AND TICKET.cod_estado=ESTADO.cod_estado AND " +
                "DOMINIO.cod_registrador=REGISTRADOR.cod_registrador AND TICKET.cod_dominio=DOMINIO.cod_dominio " +
                "AND USUARIO.cedula=CLIENTE.cedula AND " +
                "ESTADO.cod_estado=3 AND TICKET.cod_registrador=" + cod_registrador + " AND TICKET.cod_ticket=" + cod_ticket);
            if (solicitud.length > 0) {
                return res.json(solicitud[0]);
            }
            return res.status(404).json({ text: 'No existe la solicitud' });
        });
    }
    listarDominios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cod_registrador = req.body.cod_registrador;
            const dominios = yield database_1.default.query('SELECT DOMINIO.cod_dominio, DOMINIO.nom_dominio, DOMINIO.cedula FROM DOMINIO WHERE DOMINIO.cod_registrador=?', parseInt(cod_registrador));
            res.json(dominios);
        });
    }
    obtenerDominio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const aux = parseInt(req.body.cod_dominio);
            console.log(aux);
            const dominio = yield database_1.default.query('SELECT DOMINIO.cod_dominio, DOMINIO.nom_dominio, DOMINIO.cedula, USUARIO.nombre FROM DOMINIO, USUARIO WHERE USUARIO.cedula=DOMINIO.cedula AND DOMINIO.cod_dominio=' + aux);
            if (dominio.length > 0) {
                return res.json(dominio[0]);
            }
            return res.status(404).json({ text: 'No existe el dominio' });
        });
    }
    aceptarDominio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_ticket, cod_dominio, cod_registrador } = req.params;
            yield database_1.default.query('UPDATE DOMINIO SET cod_registrador=' + cod_registrador + ' WHERE cod_dominio=' + cod_dominio);
            yield database_1.default.query("UPDATE TICKET SET cod_estado=4 WHERE cod_ticket=?", parseInt(cod_ticket));
            res.json({ text: 'Dominio aceptado' });
        });
    }
    rechazarDominio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_ticket } = req.params;
            yield database_1.default.query("UPDATE TICKET SET cod_estado=5 WHERE cod_ticket=?", parseInt(cod_ticket));
            res.json({ text: 'Dominio Rechazado' });
        });
    }
    eliminarDominio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE DOMINIO SET cod_registrador=NULL WHERE cod_dominio=' + req.body.cod_dominio);
            res.json({ text: 'Borrando dominio del Registrador ' });
        });
    }
    /** PERFIL REGISTRADOR*/
    editarRegistrador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const aux = parseInt(req.body.cod_registrador);
            console.log(req.body);
            yield database_1.default.query("UPDATE USUARIO SET nombre='" + req.body.nombre + "', correo= '" + req.body.correo + "' WHERE cedula=" + parseInt(req.body.cod_registrador));
            yield database_1.default.query("UPDATE REGISTRADOR SET cod_pais=" + req.body.cod_pais + " WHERE cod_registrador=" + aux);
            res.json({ text: 'Actualizando registrador ' + aux });
        });
    }
}
const registradorController = new RegistradorController();
exports.default = registradorController;
