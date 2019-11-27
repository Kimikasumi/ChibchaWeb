import {Request, Response} from 'express';
import db from '../database';
class ClienteController{

    public async crearCliente(req:Request, res:Response): Promise<void>{
        console.log("("+parseInt(req.body.cedula)+",'"+req.body.correo+ "','"+ req.body.nombre+ "','"+ req.body.contrasenia+ "',"+ parseInt(req.body.cod_t_usuario)+")");
        await db.query('INSERT INTO USUARIO VALUES ('+(+parseInt(req.body.cedula)+",'"+req.body.correo+ "','"+ req.body.nombre+ "','"+ req.body.contrasenia+ "',"+ parseInt(req.body.cod_t_usuario)+")"));
        res.json({text: 'Cliente creado'});
        
    }

    public async obtenerCliente (req: Request,res: Response): Promise<any> {
        const {cedula} = req.params;
        const cliente = await db.query("SELECT CLIENTE.cedula, planpago.nom_p_pago, PAQUETE.nom_paquete, USUARIO.correo, USUARIO.nombre, USUARIO.contrasenia, TARJETA.numero, date_format(tarjeta.fecha_vencimiento,'%Y-%m-%d') as fecha_vencimiento, TARJETA.cod_seguridad, T_TARJETA.nom_t_tarjeta FROM T_TARJETA, TARJETA, CLIENTE, PLANPAGO, PAQUETE, USUARIO WHERE T_TARJETA.cod_t_tarjeta = TARJETA.cod_t_tarjeta AND TARJETA.cod_tarjeta = CLIENTE.cod_tarjeta AND CLIENTE.cod_paquete = PAQUETE.cod_paquete AND CLIENTE.cod_p_pago = PLANPAGO.cod_p_pago AND USUARIO.cedula = CLIENTE.cedula AND CLIENTE.cedula = ?", cedula);
        if(cliente. length > 0){
            return res.json(cliente[0]);
        }
        return res.status(404).json({text: 'No existe el cliente'});
    } 

    public async editarCliente(req:Request, res:Response): Promise<void>{
        const {cedula} = req.params;
        console.log(req.body)
        
        await db.query("UPDATE USUARIO SET nombre='"+req.body.nombre+"' WHERE cedula=?", [cedula]);
        await db.query("UPDATE USUARIO SET correo='"+req.body.correo+"' WHERE cedula=?", [cedula]);
        await db.query("UPDATE USUARIO SET contrasenia='"+req.body.contrasenia+"' WHERE cedula=?", [cedula]);
        res.json({text: 'Actualizando cliente '});
    }

    public async historialPQRCliente (req: Request,res: Response): Promise<any> {
        const {cedula} = req.params;
        const cliente = await db.query('SELECT TICKET.descripcion, TICKET.respuesta, T_TICKET.nom_t_ticket FROM USUARIO, CLIENTE, DOMINIO, TICKET, T_TICKET WHERE CLIENTE.cedula = DOMINIO.cedula AND DOMINIO.cod_dominio = TICKET.cod_dominio AND T_TICKET.cod_t_ticket = TICKET.cod_t_ticket  AND USUARIO.cedula = CLIENTE.cedula AND USUARIO.cedula=?',cedula);
        if(cliente. length > 0){
            return res.json(cliente);
        }
        return res.status(404).json({text: 'Historial de cliente obtenido '});
    }

    public async obtenerDominiosCliente (req: Request,res: Response): Promise<any> {
        const {cedula} = req.params;
        const cliente = await db.query('SELECT nom_dominio, nom_estado, nombre FROM ESTADO, TICKET, DOMINIO, CLIENTE, USUARIO, REGISTRADOR WHERE ESTADO.cod_estado = TICKET.cod_estado AND TICKET.cod_dominio = DOMINIO.cod_dominio AND DOMINIO.cedula = CLIENTE.cedula AND DOMINIO.cod_registrador = USUARIO.cedula AND USUARIO.cedula = REGISTRADOR.cod_registrador AND CLIENTE.cedula = ?',cedula);
        if(cliente. length > 0){
            return res.json(cliente);
        }
        return res.status(404).json({text: 'Dominios cliente obtenidos '});
    }



    public async crearSolicitud(req:Request, res:Response): Promise<void>{
        console.log(req.body)
        const aux =parseInt(req.body.cod_t_ticket)
        console.log(aux)
        await db.query("INSERT INTO TICKET VALUES (21,"+parseInt(req.body.cod_t_ticket)+","+parseInt(req.body.cod_dominio)+",1,'"+req.body.descripcion+"',NULL,"+req.body.cedula+",NULL)");
        res.json({text: 'Solicitud creada'});
        
    }

    public async agregarTarjeta(req:Request, res:Response): Promise<void>{
        await db.query('INSERT INTO TARJETA VALUES ('+999+","+(parseInt(req.body.nom_t_tarjeta)+","+req.body.numero+ ",'"+ req.body.fecha_vencimiento +"',"+req.body.cod_seguridad +")"));
        
        res.json({text: 'se agregó la tarjeta con éxito'});
    }


    public async obtenerTarjeta (req: Request,res: Response): Promise<any> {
        const {cedula} = req.params;
        const cliente = await db.query('SELECT CLIENTE.cedula, T_TARJETA.nom_t_tarjeta, TARJETA.numero, TARJETA.fecha_vencimiento, TARJETA.cod_seguridad FROM TARJETA, CLIENTE, T_TARJETA WHERE TARJETA.cod_tarjeta = CLIENTE.cod_tarjeta AND TARJETA.cod_t_tarjeta = T_TARJETA.cod_t_tarjeta AND CLIENTE.cedula=?',cedula);
        if(cliente. length > 0){
            return res.json(cliente[0]);
        }
        return res.status(404).json({text: 'No existe la tarjeta'});
    } 

}

const clienteController = new ClienteController();
export default clienteController;