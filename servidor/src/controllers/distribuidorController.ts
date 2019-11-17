import {Request, Response} from 'express';
import db from '../database';
class DistribuidorController{
    public async listarClientes (req: Request,res: Response) {
        const cedula= parseInt(req.body.cedula);
        const clientes= await db.query('SELECT USUARIO.nombre, CLIENTE.cedula, DOMINIO.nom_dominio, PLANPAGO.nom_p_pago FROM CLIENTE, DOMINIO, PLANPAGO, DISTRIBUIDOR, USUARIO WHERE CLIENTE.cod_p_pago=PLANPAGO.cod_p_pago AND DOMINIO.cedula=CLIENTE.cedula AND USUARIO.cedula=CLIENTE.cedula AND DISTRIBUIDOR.cedula='+cedula);
        res.json(clientes);
    } 

   public async crearCliente(req:Request, res:Response): Promise<void>{
        await db.query('INSERT INTO USUARIO VALUES ('+(+parseInt(req.body.cedula)+",'"+req.body.correo+ "','"+ req.body.nombre+ "','"+ req.body.contrasenia+ "',2)"));
        await db.query("UPDATE CLIENTE SET cod_p_pago="+req.body.cod_p_pago+", cod_paquete="+ req.body.cod_paquete+", cedula_distribuidor="+req.body.cedula_distribuidor +" WHERE cedula="+req.body.cedula);
        res.json({text: 'Cliente creado'});
    }

}
const distribuidorController = new DistribuidorController();
export default distribuidorController;