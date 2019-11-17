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
            const dominio = yield database_1.default.query('SELECT DOMINIO.cod_dominio, DOMINIO.nom_dominio, DOMINIO.cedula FROM DOMINIO WHERE DOMINIO.cod_dominio=' + aux);
            if (dominio.length > 0) {
                return res.json(dominio[0]);
            }
            return res.status(404).json({ text: 'No existe el dominio' });
        });
    }
    aceptarDominio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE DOMINIO SET cod_registrador=' + req.body.cod_registrador + ' WHERE cod_dominio=' + req.body.cod_dominio);
            res.json({ text: 'Dominio aceptado' });
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
