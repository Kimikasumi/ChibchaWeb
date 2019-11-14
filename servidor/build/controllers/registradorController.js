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
            const dominios = yield database_1.default.query('SELECT EMPLEADO.cedula, USUARIO.nombre, USUARIO.correo, T_EMPLEADO.nom_t_empleado FROM EMPLEADO, T_EMPLEADO, USUARIO WHERE EMPLEADO.cedula=USUARIO.cedula AND EMPLEADO.cod_t_empleado=T_EMPLEADO.cod_t_empleado');
            res.json(dominios);
        });
    }
    obtenerDominio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula } = req.params;
            const empleado = yield database_1.default.query('SELECT EMPLEADO.cedula, USUARIO.nombre, USUARIO.correo, T_EMPLEADO.nom_t_empleado FROM EMPLEADO, T_EMPLEADO, USUARIO WHERE EMPLEADO.cedula=USUARIO.cedula AND EMPLEADO.cod_t_empleado=T_EMPLEADO.cod_t_empleado AND USUARIO.cedula=?', [cedula]);
            if (empleado.length > 0) {
                return res.json(empleado[0]);
            }
            return res.status(404).json({ text: 'No existe el empleado' });
        });
    }
    crearDominio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("(" + parseInt(req.body.cedula) + ",'" + req.body.correo + "','" + req.body.nombre + "','" + req.body.contrasenia + "'," + parseInt(req.body.cod_t_usuario) + ")");
            yield database_1.default.query('INSERT INTO USUARIO VALUES (' + (+parseInt(req.body.cedula) + ",'" + req.body.correo + "','" + req.body.nombre + "','" + req.body.contrasenia + "'," + parseInt(req.body.cod_t_usuario) + ")"));
            yield database_1.default.query('UPDATE EMPLEADO SET cod_t_empleado=' + req.body.cod_t_empleado + ' WHERE cedula=' + req.body.cedula);
            res.json({ text: 'Empleado creado' });
        });
    }
    eliminarDominio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula } = req.params;
            yield database_1.default.query('DELETE FROM EMPLEADO WHERE cedula= ?', [cedula]);
            yield database_1.default.query('DELETE FROM USUARIO WHERE cedula= ?', [cedula]);
            res.json({ text: 'Borrando empleado ' + req.params.cedula });
        });
    }
}
const registradorController = new RegistradorController();
exports.default = registradorController;
