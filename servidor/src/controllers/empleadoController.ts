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

    public async obtenerSolicitud (req: Request,res: Response): Promise<any> {
        const cod_ticket = parseInt(req.body.cod_ticket)
        const cod_t_empleado= req.body.cod_t_empleado
        const solicitud = await db.query("SELECT DOMINIO.cod_dominio, DOMINIO.nom_dominio,"+
        "USUARIO.nombre, TICKET.descripcion, ESTADO.nom_estado FROM  TICKET, DOMINIO, USUARIO, "+
        "ESTADO, CLIENTE, REGISTRADOR WHERE DOMINIO.cedula=CLIENTE.cedula AND "+
        "DOMINIO.cod_registrador=REGISTRADOR.cod_registrador AND TICKET.cod_dominio=DOMINIO.cod_dominio "+
        "AND TICKET.cod_estado=ESTADO.cod_estado AND USUARIO.cedula=CLIENTE.cedula AND "+
        "ESTADO.cod_estado=1 AND TICKET.cod_t_ticket="+cod_t_empleado+" AND TICKET.cod_ticket="+cod_ticket);
        if(solicitud. length > 0){
            return res.json(solicitud[0]);
        }
        return res.status(404).json({text: 'No existe el dominio'});
    } 

    public async editarEmpleado(req:Request, res:Response): Promise<void>{
        const cedula = req.body.cedula;
        console.log(req.body)
        await db.query("UPDATE USUARIO SET correo='"+req.body.correo+"', nombre='"+req.body.nombre+"' WHERE cedula="+parseInt(cedula));
        res.json({text: 'Actualizando empleado '+ req.params.cedula});
    }

    public async responderTicketND(req:Request, res:Response): Promise<void>{
        const cod_ticket= req.body.cod_ticket
        console.log(req.body)
        await db.query("UPDATE TICKET SET respuesta='"+req.body.respuesta+"', cod_estado=3, cod_empleado="+req.body.cod_empleado+" WHERE cod_ticket=?",parseInt(cod_ticket));
        res.json({text: 'Respondiendo Ticket '+ req.body.cod_ticket});
    }

    public async obtenerRegistradores(req:Request, res:Response): Promise<void>{
        const registradores = await db.query("SELECT cod_registrador, nombre FROM REGISTRADOR, USUARIO WHERE USUARIO.cedula=REGISTRADOR.cod_registrador");
        res.json(registradores);
    }

    public async responderTicketCH(req:Request, res:Response): Promise<void>{
        const cod_ticket= req.body.cod_ticket
        console.log(req.body)
        await db.query("UPDATE TICKET SET respuesta='"+req.body.respuesta+"', cod_estado=3, cedula="+req.body.cedula+", cod_registrador="+req.body.cod_registrador+" WHERE cod_ticket=?",parseInt(cod_ticket));
        res.json({text: 'Respondiendo Ticket '+ req.body.cod_ticket});
    }

    public async responderTicketCPP(req:Request, res:Response): Promise<void>{
        const cod_ticket= req.body.cod_ticket
        console.log(req.body)
        await db.query("UPDATE CLIENTE SET cod_p_pago="+req.body.cod_p_pago +" WHERE cedula="+req.body.cedula);
        await db.query("UPDATE TICKET SET respuesta='"+req.body.respuesta+"', cod_estado=4, cod_empleado="+req.body.cod_empleado+", WHERE cod_ticket=?",parseInt(cod_ticket));
        res.json({text: 'Respondiendo Ticket '+ req.body.cod_ticket});
    }

    public async obtenerPlanesPago(req:Request, res:Response): Promise<void>{
        const planesPago = await db.query("SELECT cod_p_pago, nom_p_pago FROM PLANPAGO");
        res.json(planesPago);
    }

    public async responderTicketCP(req:Request, res:Response): Promise<void>{
        const cod_ticket= req.body.cod_ticket
        console.log(req.body)
        await db.query("UPDATE CLIENTE SET cod_paquete="+req.body.cod_paquete +" WHERE cedula="+req.body.cedula);
        await db.query("UPDATE TICKET SET respuesta='"+req.body.respuesta+"', cod_estado=4, cod_empleado="+req.body.cod_empleado+", WHERE cod_ticket=?",parseInt(cod_ticket));
        res.json({text: 'Respondiendo Ticket '+ req.body.cod_ticket});
    }

    public async obtenerPaquetes(req:Request, res:Response): Promise<void>{
        const paquetes = await db.query("SELECT cod_paquete, nom_paquete FROM PAQUETE");
        res.json(paquetes);
    }

    
    public async responderTicketPQR(req:Request, res:Response): Promise<void>{
        const cod_ticket= req.body.cod_ticket
        console.log(req.body)
        await db.query("UPDATE TICKET SET respuesta='"+req.body.respuesta+"', cod_estado=4, cod_empleado="+req.body.cod_empleado+", WHERE cod_ticket=?",parseInt(cod_ticket));
        res.json({text: 'Respondiendo Ticket '+ req.body.cod_ticket});
    }
}
const empleadoController = new EmpleadoController();
export default empleadoController;