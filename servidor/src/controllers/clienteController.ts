import {Request, Response} from 'express';
import db from '../database';
class AdminController{

    public async obtenerCliente (req: Request,res: Response): Promise<any> {
        const {cedula} = req.params;
        const empleado = await db.query('SELECT EMPLEADO.cedula, USUARIO.nombre, USUARIO.correo, T_EMPLEADO.nom_t_empleado FROM EMPLEADO, T_EMPLEADO, USUARIO WHERE EMPLEADO.cedula=USUARIO.cedula AND EMPLEADO.cod_t_empleado=T_EMPLEADO.cod_t_empleado AND USUARIO.cedula=?',[cedula]);
        if(empleado. length > 0){
            return res.json(empleado[0]);
        }
        return res.status(404).json({text: 'No existe el empleado'});
    } 

    public async editarCliente(req:Request, res:Response): Promise<void>{
        const {cedula} = req.params;
        console.log(req.body)
        
        await db.query('UPDATE USUARIO SET nombre='+req.body.nombre+' WHERE cedula=?', cedula);
        await db.query("UPDATE CLIENTE SET cod_m_pago='"+req.body.cod_m_pago+"' WHERE cedula=?", cedula);
        await db.query('UPDATE CLIENTE SET tarjeta='+req.body.tarjeta+' WHERE cedula=?', cedula);
        res.json({text: 'Actualizando empleado '+ req.params.cedula});
    }

    public async obtenerDominiosCliente (req: Request,res: Response): Promise<any> {
        const {cedula} = req.params;
        const empleado = await db.query('SELECT TICKET.cod_t_ticket, TICKET.cod_estado, TICKET.descripcion FROM USUARIO, CLIENTE, DOMINIO, TICKET, T_TICKET WHERE CLIENTE.cedula = DOMINIO.cedula AND DOMINIO.cod_dominio = TICKET.cod_dominio AND T_TICKET.cod_t_ticket = TICKET.cod_t_ticket  AND USUARIO.cedula = CLIENTE.cedula AND USUARIO.cedula=?',cedula);
        if(empleado. length > 0){
            return res.json(empleado[0]);
        }
        return res.status(404).json({text: 'No existe el empleado'});
    } 

}

const adminController = new AdminController();
export default adminController;