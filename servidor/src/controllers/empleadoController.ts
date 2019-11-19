import {Request, Response} from 'express';
import db from '../database';
class EmpleadoController{

    /** SOLICITUDES */
    public async listarSolicitudes (req: Request,res: Response) {
        const cod_t_empleado= req.body.cod_t_empleado
        const dominios= await db.query("SELECT DOMINIO.cod_dominio, DOMINIO.nom_dominio," +
        "USUARIO.nombre, TICKET.descripcion, ESTADO.nom_estado FROM  TICKET, DOMINIO, USUARIO, "+ 
        "ESTADO, CLIENTE, REGISTRADOR WHERE DOMINIO.cedula=CLIENTE.cedula AND "+ 
        "DOMINIO.cod_registrador=REGISTRADOR.cod_registrador AND TICKET.cod_dominio=DOMINIO.cod_dominio "+ 
        "AND TICKET.cod_estado=ESTADO.cod_estado AND USUARIO.cedula=CLIENTE.cedula AND "+
        "ESTADO.cod_estado=1 AND TICKET.cod_t_ticket="+cod_t_empleado);
        res.json(dominios);
    } 

    public async editarEmpleado(req:Request, res:Response): Promise<void>{
        const cedula = req.body.cedula;
        console.log(req.body)
        await db.query("UPDATE USUARIO SET correo='"+req.body.correo+"', nombre='"+req.body.nombre+"' WHERE cedula="+parseInt(cedula));
        res.json({text: 'Actualizando empleado '+ req.params.cedula});
    }

    public async responderTicket(req:Request, res:Response): Promise<void>{
        const cod_ticket= req.body.cod_ticket
        console.log(req.body)
        await db.query("UPDATE TICKET SET respuesta='"+req.body.respuesta+"' WHERE cod_ticket=?",parseInt(cod_ticket));
        res.json({text: 'Respondiendo Ticket '+ req.body.cod_ticket});
    }
}
const empleadoController = new EmpleadoController();
export default empleadoController;