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
class UsuarioController {
    /** DOMINIOS */
    iniciarSesion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const correo = req.body.correo;
            const contrasenia = req.body.contrasenia;
            const usuario = yield database_1.default.query("SELECT * FROM USUARIO WHERE USUARIO.correo='" + correo + "' AND USUARIO.contrasenia='" + contrasenia + "'");
            if (usuario.length > 0) {
                const cod_t_usuario = usuario[0].cod_t_usuario;
                var resultado = null;
                //ESTE MEN ES EL CLIENTE
                if (cod_t_usuario == 2) {
                    const usuarioCliente = yield database_1.default.query("SELECT USUARIO.cod_t_usuario, USUARIO.cedula, USUARIO.correo, USUARIO.contrasenia, USUARIO.nombre, TARJETA.numero, PLANPAGO.nom_p_pago, PAQUETE.nom_paquete, CLIENTE.cedula_distribuidor FROM USUARIO, CLIENTE, DISTRIBUIDOR, TARJETA, PLANPAGO, PAQUETE WHERE USUARIO.cedula=CLIENTE.cedula AND CLIENTE.cedula_distribuidor=DISTRIBUIDOR.cedula AND PLANPAGO.cod_p_pago=CLIENTE.cod_p_pago AND CLIENTE.cod_tarjeta=TARJETA.cod_tarjeta AND PAQUETE.cod_paquete=CLIENTE.cod_paquete  AND USUARIO.correo='" + correo + "'");
                    resultado = res.json(usuarioCliente[0]);
                    console.log(usuarioCliente);
                }
                //ESTE MEN ES EL REGISTRADOR DE DOMINIO
                else if (cod_t_usuario == 3) {
                    const usuarioCliente = yield database_1.default.query("SELECT USUARIO.cod_t_usuario, REGISTRADOR.cod_registrador, PAIS.nom_pais, USUARIO.cedula, USUARIO.correo, USUARIO.nombre, USUARIO.contrasenia FROM PAIS, USUARIO, REGISTRADOR WHERE USUARIO.cedula = REGISTRADOR.cod_registrador AND PAIS.cod_pais = REGISTRADOR.cod_pais AND USUARIO.correo='" + correo + "'");
                    resultado = res.json(usuarioCliente[0]);
                }
                //ESTE MEN ES EL EMPLEADO
                else if (cod_t_usuario == 4) {
                    const usuarioCliente = yield database_1.default.query("SELECT USUARIO.cod_t_usuario, T_EMPLEADO.nom_t_empleado, USUARIO.cedula, USUARIO.correo, USUARIO.nombre, USUARIO.contrasenia FROM USUARIO, EMPLEADO, T_EMPLEADO WHERE USUARIO.cedula = EMPLEADO.cedula AND EMPLEADO.cod_t_empleado = T_EMPLEADO.cod_t_empleado AND USUARIO.correo='" + correo + "'");
                    resultado = res.json(usuarioCliente[0]);
                }
                //ESTE MEN ES EL DISTRIBUIDOR
                else if (cod_t_usuario == 5) {
                    const usuarioCliente = yield database_1.default.query("SELECT USUARIO.cod_t_usuario, T_DISTRIBUIDOR.nom_t_distribuidor, T_DISTRIBUIDOR.val_comision, USUARIO.cedula, USUARIO.correo, USUARIO.nombre, USUARIO.contrasenia FROM USUARIO, DISTRIBUIDOR, T_DISTRIBUIDOR WHERE USUARIO.cedula = DISTRIBUIDOR.cedula AND DISTRIBUIDOR.cod_t_distribuidor = T_DISTRIBUIDOR.cod_t_distribuidor AND USUARIO.correo='" + correo + "'");
                    resultado = res.json(usuarioCliente[0]);
                }
                //ESTE MEN ES EL ADMIN PUES
                else {
                    const usuarioCliente = yield database_1.default.query("SELECT USUARIO.cod_t_usuario, USUARIO.cedula, USUARIO.correo, USUARIO.nombre, USUARIO.contrasenia FROM USUARIO, ADMINISTRADOR WHERE USUARIO.cedula = ADMINISTRADOR.cedula AND USUARIO.correo='" + correo + "'");
                    resultado = res.json(usuarioCliente[0]);
                }
                return resultado;
            }
            return res.status(404).json({ text: 'No existe el usuario' });
        });
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
