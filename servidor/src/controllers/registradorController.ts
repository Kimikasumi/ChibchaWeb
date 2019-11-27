import {Request, Response} from 'express';
import db from '../database';
class RegistradorController{

    /** DOMINIOS */

    public async listarSolicitudes (req: Request,res: Response) {
        const {cod_registrador} = req.params;
        console.log(cod_registrador);
        const cod_ticket= req.body.cod_ticket
        const solicitudes= await db.query("SELECT TICKET.cod_ticket, DOMINIO.cod_dominio, DOMINIO.nom_dominio,"+
        "DOMINIO.descripcion as DomDescrip, USUARIO.nombre, TICKET.descripcion, ESTADO.nom_estado FROM  TICKET, DOMINIO, USUARIO,"+
        "ESTADO, CLIENTE WHERE DOMINIO.cedula=CLIENTE.cedula AND "+
        "TICKET.cod_dominio=DOMINIO.cod_dominio "+
        "AND TICKET.cod_estado=ESTADO.cod_estado AND USUARIO.cedula=CLIENTE.cedula AND "+
        "ESTADO.cod_estado=3 AND TICKET.cod_registrador=?", [cod_registrador]);
        res.json(solicitudes);
    } 

    
    public async obtenerSolicitud (req: Request,res: Response): Promise<any> {
        const {cod_ticket, cod_registrador} = req.params;
        console.log(req.params);
        const solicitud = await db.query("SELECT DOMINIO.cod_dominio, DOMINIO.nom_dominio,"+
        "USUARIO.nombre, TICKET.descripcion,  ESTADO.nom_estado  FROM  TICKET, DOMINIO, USUARIO, "+
        "CLIENTE, REGISTRADOR, ESTADO WHERE DOMINIO.cedula=CLIENTE.cedula AND TICKET.cod_estado=ESTADO.cod_estado AND "+
        "DOMINIO.cod_registrador=REGISTRADOR.cod_registrador AND TICKET.cod_dominio=DOMINIO.cod_dominio "+
        "AND USUARIO.cedula=CLIENTE.cedula AND "+
        "ESTADO.cod_estado=3 AND TICKET.cod_registrador="+cod_registrador+" AND TICKET.cod_ticket="+cod_ticket);
        if(solicitud. length > 0){
            return res.json(solicitud[0]);
        }
        return res.status(404).json({text: 'No existe la solicitud'});
    } 

    public async listarDominios (req: Request,res: Response) {
        const cod_registrador= req.body.cod_registrador
        const dominios= await db.query('SELECT DOMINIO.cod_dominio, DOMINIO.nom_dominio, DOMINIO.cedula FROM DOMINIO WHERE DOMINIO.cod_registrador=?',parseInt(cod_registrador));
        res.json(dominios);
    } 
    public async obtenerDominio (req: Request,res: Response): Promise<any> {
        const aux = parseInt(req.body.cod_dominio)
        console.log(aux)
        const dominio = await db.query('SELECT DOMINIO.cod_dominio, DOMINIO.nom_dominio, DOMINIO.cedula, USUARIO.nombre FROM DOMINIO, USUARIO WHERE USUARIO.cedula=DOMINIO.cedula AND DOMINIO.cod_dominio='+aux);
        if(dominio. length > 0){
            return res.json(dominio[0]);
        }
        return res.status(404).json({text: 'No existe el dominio'});
    } 
    
    public async aceptarDominio(req:Request, res:Response): Promise<void>{
        const {cod_ticket, cod_dominio, cod_registrador}= req.params;
        await db.query('UPDATE DOMINIO SET cod_registrador='+ cod_registrador +' WHERE cod_dominio='+ cod_dominio);
        await db.query("UPDATE TICKET SET cod_estado=4 WHERE cod_ticket=?",parseInt(cod_ticket));
        res.json({text: 'Dominio aceptado'});
    }

    public async rechazarDominio(req:Request, res:Response): Promise<void>{
        const {cod_ticket}= req.params;
        await db.query("UPDATE TICKET SET cod_estado=5 WHERE cod_ticket=?",parseInt(cod_ticket));
        res.json({text: 'Dominio Rechazado'});
    }

    public async eliminarDominio(req:Request, res:Response): Promise<void>{
        await db.query('UPDATE DOMINIO SET cod_registrador=NULL WHERE cod_dominio='+req.body.cod_dominio);
        res.json({text: 'Borrando dominio del Registrador '});
    }

    /** PERFIL REGISTRADOR*/ 

    public async editarRegistrador(req:Request, res:Response): Promise<void>{
        const aux = parseInt(req.body.cod_registrador)
        console.log(req.body)
        await db.query("UPDATE USUARIO SET nombre='"+req.body.nombre+"', correo= '"+ req.body.correo+"' WHERE cedula="+parseInt(req.body.cod_registrador));
        await db.query("UPDATE REGISTRADOR SET cod_pais="+req.body.cod_pais+" WHERE cod_registrador="+aux);
        res.json({text: 'Actualizando registrador '+ aux});
    
    }
}
const registradorController = new RegistradorController();
export default registradorController;