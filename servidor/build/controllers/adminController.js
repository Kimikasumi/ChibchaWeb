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
class AdminController {
    /** EMPLEADO */
    listarEmpleados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empleados = yield database_1.default.query('SELECT EMPLEADO.cedula, USUARIO.nombre, USUARIO.correo, T_EMPLEADO.nom_t_empleado FROM EMPLEADO, T_EMPLEADO, USUARIO WHERE EMPLEADO.cedula=USUARIO.cedula AND EMPLEADO.cod_t_empleado=T_EMPLEADO.cod_t_empleado');
            res.json(empleados);
        });
    }
    obtenerEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula_empleado } = req.params;
            const empleado = yield database_1.default.query('SELECT EMPLEADO.cedula, USUARIO.nombre, USUARIO.correo, T_EMPLEADO.nom_t_empleado FROM EMPLEADO, T_EMPLEADO, USUARIO WHERE EMPLEADO.cedula=USUARIO.cedula AND EMPLEADO.cod_t_empleado=T_EMPLEADO.cod_t_empleado AND USUARIO.cedula=?', [cedula_empleado]);
            if (empleado.length > 0) {
                return res.json(empleado[0]);
            }
            return res.status(404).json({ text: 'No existe el empleado' });
        });
    }
    crearEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("(" + parseInt(req.body.cedula) + ",'" + req.body.correo + "','" + req.body.nombre + "','" + req.body.contrasenia + "'," + parseInt(req.body.cod_t_usuario) + ")");
            yield database_1.default.query('INSERT INTO USUARIO VALUES (' + (+parseInt(req.body.cedula) + ",'" + req.body.correo + "','" + req.body.nombre + "','" + req.body.contrasenia + "'," + parseInt(req.body.cod_t_usuario) + ")"));
            yield database_1.default.query('UPDATE EMPLEADO SET cod_t_empleado=' + req.body.cod_t_empleado + ' WHERE cedula=' + req.body.cedula);
            res.json({ text: 'Empleado creado' });
        });
    }
    editarEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula_empleado } = req.params;
            console.log(req.body);
            yield database_1.default.query('UPDATE EMPLEADO SET cod_t_empleado=' + req.body.cod_t_empleado + ' WHERE cedula=?', [cedula_empleado]);
            yield database_1.default.query("UPDATE USUARIO SET correo='" + req.body.correo + "', nombre='" + req.body.nombre + "' WHERE cedula=?", parseInt(req.body.ceducedula_empleadola));
            res.json({ text: 'Actualizando empleado ' + req.params.cedula_empleado });
        });
    }
    eliminarEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula_empleado } = req.params;
            yield database_1.default.query('DELETE FROM EMPLEADO WHERE cedula= ?', [cedula_empleado]);
            yield database_1.default.query('DELETE FROM USUARIO WHERE cedula= ?', [cedula_empleado]);
            res.json({ text: 'Borrando empleado ' + req.params.cedula_empleado });
        });
    }
    /** DISTRIBUIDOR */
    listarDistribuidores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const distribuidores = yield database_1.default.query('SELECT DISTRIBUIDOR.cedula, USUARIO.nombre, USUARIO.correo, T_DISTRIBUIDOR.nom_t_distribuidor FROM DISTRIBUIDOR, T_DISTRIBUIDOR, USUARIO WHERE DISTRIBUIDOR.cedula=USUARIO.cedula AND DISTRIBUIDOR.cod_t_distribuidor=T_DISTRIBUIDOR.cod_t_distribuidor');
            res.json(distribuidores);
        });
    }
    obtenerDistribuidor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula_distribuidor } = req.params;
            const distribuidor = yield database_1.default.query('SELECT DISTRIBUIDOR.cedula, USUARIO.nombre, USUARIO.correo, T_DISTRIBUIDOR.nom_t_distribuidor FROM DISTRIBUIDOR, T_DISTRIBUIDOR, USUARIO WHERE DISTRIBUIDOR.cedula=USUARIO.cedula AND DISTRIBUIDOR.cod_t_distribuidor=T_DISTRIBUIDOR.cod_t_distribuidor AND USUARIO.cedula=?', [cedula_distribuidor]);
            if (distribuidor.length > 0) {
                return res.json(distribuidor[0]);
            }
            return res.status(404).json({ text: 'No existe el distribuidor' });
        });
    }
    crearDistribuidor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("(" + parseInt(req.body.cedula) + ",'" + req.body.correo + "','" + req.body.nombre + "','" + req.body.contrasenia + "'," + parseInt(req.body.cod_t_usuario) + ")");
            yield database_1.default.query('INSERT INTO USUARIO VALUES (' + (+parseInt(req.body.cedula) + ",'" + req.body.correo + "','" + req.body.nombre + "','" + req.body.contrasenia + "'," + parseInt(req.body.cod_t_usuario) + ")"));
            yield database_1.default.query('UPDATE DISTRIBUIDOR SET cod_t_distribuidor=' + req.body.cod_t_distribuidor + ' WHERE cedula=' + req.body.cedula);
            res.json({ text: 'Distribuidor creado' });
        });
    }
    editarDistribuidor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula_distribuidor } = req.params;
            console.log(cedula_distribuidor);
            yield database_1.default.query('UPDATE DISTRIBUIDOR SET cod_t_distribuidor=' + req.body.cod_t_distribuidor + ' WHERE cedula=?', cedula_distribuidor);
            yield database_1.default.query("UPDATE USUARIO SET correo='" + req.body.correo + "', nombre='" + req.body.nombre + "' WHERE cedula=?", parseInt(req.body.cedula_distribuidor));
            res.json({ text: 'Actualizando distribuidor ' + req.params.cedula });
        });
    }
    eliminarDistribuidor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula_distribuidor } = req.params;
            yield database_1.default.query('DELETE FROM DISTRIBUIDOR WHERE cedula= ?', [cedula_distribuidor]);
            yield database_1.default.query('DELETE FROM USUARIO WHERE cedula= ?', [cedula_distribuidor]);
            res.json({ text: 'Borrando distribuidor ' + req.params.cedula_distribuidor });
        });
    }
    obtenerCliDis(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cedula_distribuidor = parseInt(req.body.cedula_distribuidor);
            //const cantidad =await db.query("CALL consultarComision("+cedula_distribuidor+")");
            const cantidad = yield database_1.default.query("SELECT consultarComisionF(" + cedula_distribuidor + ") as Respuesta");
            const valor = cantidad[0].Respuesta;
            const porcentaje = yield database_1.default.query("SELECT val_comision as P FROM T_DISTRIBUIDOR, DISTRIBUIDOR WHERE T_DISTRIBUIDOR.cod_t_distribuidor = distribuidor.cod_t_distribuidor AND DISTRIBUIDOR.cedula=" + cedula_distribuidor);
            const resultado = parseInt(valor) * parseInt(porcentaje[0].P) / 100;
            console.log(resultado);
            res.json(resultado);
        });
    }
    /**REGISTRADOR DE DOMINIO */
    listarRegistrador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const registradores = yield database_1.default.query('SELECT REGISTRADOR.cod_registrador, USUARIO.nombre, USUARIO.correo, PAIS.nom_pais FROM REGISTRADOR, PAIS, USUARIO WHERE REGISTRADOR.cod_registrador=USUARIO.cedula AND REGISTRADOR.cod_pais=PAIS.cod_pais');
            res.json(registradores);
        });
    }
    obtenerRegistrador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_registrador } = req.params;
            const registrador = yield database_1.default.query('SELECT REGISTRADOR.cod_registrador, USUARIO.nombre, USUARIO.correo, PAIS.nom_pais FROM REGISTRADOR, PAIS, USUARIO WHERE REGISTRADOR.cod_registrador=USUARIO.cedula AND REGISTRADOR.cod_pais=PAIS.cod_pais AND USUARIO.cedula=?', [cod_registrador]);
            if (registrador.length > 0) {
                return res.json(registrador[0]);
            }
            return res.status(404).json({ text: 'No existe el registrador' });
        });
    }
    crearRegistrador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cod_reg = parseInt(req.body.cod_registrador);
            yield database_1.default.query('INSERT INTO USUARIO VALUES (' + cod_reg + ",'" + req.body.correo + "','" + req.body.nombre + "','" + req.body.contrasenia + "'," + parseInt(req.body.cod_t_usuario) + ")");
            yield database_1.default.query('UPDATE REGISTRADOR SET cod_pais=' + req.body.cod_pais + ' WHERE cod_registrador=' + req.body.cod_registrador);
            res.json({ text: 'Registrador creado' });
        });
    }
    editarRegistrador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_registrador } = req.params;
            yield database_1.default.query('UPDATE REGISTRADOR SET cod_pais=' + req.body.cod_pais + ' WHERE cod_registrador=?', cod_registrador);
            yield database_1.default.query("UPDATE USUARIO SET correo='" + req.body.correo + "', nombre='" + req.body.nombre + "' WHERE cedula=?", parseInt(req.body.cod_registrador));
            res.json({ text: 'Actualizando distribuidor ' + req.params.cod_registrador });
        });
    }
    eliminarRegistrador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_registrador } = req.params;
            yield database_1.default.query('DELETE FROM REGISTRADOR WHERE cod_registrador= ?', [cod_registrador]);
            yield database_1.default.query('DELETE FROM USUARIO WHERE cedula= ?', [cod_registrador]);
            res.json({ text: 'Borrando registrador ' + req.params.cod_registrador });
        });
    }
}
const adminController = new AdminController();
exports.default = adminController;
