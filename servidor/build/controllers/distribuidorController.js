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
class DistribuidorController {
    listarClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cedula = parseInt(req.body.cedula);
            const clientes = yield database_1.default.query('SELECT USUARIO.nombre, CLIENTE.cedula, DOMINIO.nom_dominio, PLANPAGO.nom_p_pago FROM CLIENTE, DOMINIO, PLANPAGO, DISTRIBUIDOR, USUARIO WHERE CLIENTE.cod_p_pago=PLANPAGO.cod_p_pago AND DOMINIO.cedula=CLIENTE.cedula AND USUARIO.cedula=CLIENTE.cedula AND DISTRIBUIDOR.cedula=' + cedula);
            res.json(clientes);
        });
    }
    crearCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO USUARIO VALUES (' + (+parseInt(req.body.cedula) + ",'" + req.body.correo + "','" + req.body.nombre + "','" + req.body.contrasenia + "',2)"));
            yield database_1.default.query("UPDATE CLIENTE SET cod_p_pago=" + req.body.cod_p_pago + ", cod_paquete=" + req.body.cod_paquete + ", cedula_distribuidor=" + req.body.cedula_distribuidor + " WHERE cedula=" + req.body.cedula);
            res.json({ text: 'Cliente creado' });
        });
    }
    eliminarCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("DELETE FROM CLIENTE WHERE cedula=" + req.body.cedula);
            yield database_1.default.query("DELETE FROM USUARIO WHERE cedula=" + req.body.cedula);
            res.json({ text: 'Cliente creado' });
        });
    }
}
const distribuidorController = new DistribuidorController();
exports.default = distribuidorController;
