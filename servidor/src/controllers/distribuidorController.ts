import {Request, Response} from 'express';
import db from '../database';
class DistribuidorController{
    public async listarClientes (req: Request,res: Response) {
        const {cedula}= req.params
        const clientes= await db.query('SELECT USUARIO.nombre, CLIENTE.cedula, DOMINIO.nom_dominio, DOMINIO.cod_dominio, PLANPAGO.nom_p_pago FROM CLIENTE, DOMINIO, PLANPAGO, DISTRIBUIDOR, USUARIO WHERE CLIENTE.cod_p_pago=PLANPAGO.cod_p_pago AND DOMINIO.cedula=CLIENTE.cedula AND USUARIO.cedula=CLIENTE.cedula AND DISTRIBUIDOR.cedula=?',[cedula]);
        res.json(clientes);
    } 

   public async crearCliente(req:Request, res:Response): Promise<void>{
        await db.query('INSERT INTO USUARIO VALUES ('+(+parseInt(req.body.cedula)+",'"+req.body.correo+ "','"+ req.body.nombre+ "','"+ req.body.contrasenia+ "',2)"));
        await db.query("UPDATE CLIENTE SET cod_p_pago="+req.body.cod_p_pago+", cod_paquete="+ req.body.cod_paquete+", cedula_distribuidor="+req.body.cedula_distribuidor +" WHERE cedula="+req.body.cedula);
        res.json({text: 'Cliente creado'});
    }

    public async eliminarCliente(req:Request, res:Response): Promise<void>{
        await db.query("DELETE FROM CLIENTE WHERE cedula="+req.body.cedula);
        await db.query("DELETE FROM USUARIO WHERE cedula="+req.body.cedula);
        res.json({text: 'Cliente creado'});
    }

    public async listarSolicitudes (req: Request,res: Response) {
        const cod_ticket= req.body.cod_ticket
        const solicitudes= await db.query("SELECT TICKET.cod_ticket, DOMINIO.cod_dominio, DOMINIO.nom_dominio,"+
        "DOMINIO.descripcion as DomDescrip, USUARIO.nombre, TICKET.descripcion, ESTADO.nom_estado FROM  TICKET, DOMINIO, USUARIO,"+
        "ESTADO, CLIENTE WHERE DOMINIO.cedula=CLIENTE.cedula AND "+
        "TICKET.cod_dominio=DOMINIO.cod_dominio "+
        "AND TICKET.cod_estado=ESTADO.cod_estado AND USUARIO.cedula=CLIENTE.cedula AND "+
        "ESTADO.cod_estado=3 AND TICKET.cod_registrador= AND TICKET.cod_ticket="+cod_ticket);
        res.json(solicitudes);
    } 


}
const distribuidorController = new DistribuidorController();
export default distribuidorController;