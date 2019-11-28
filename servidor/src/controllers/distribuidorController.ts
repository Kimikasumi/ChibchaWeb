import {Request, Response} from 'express';
import db from '../database';
class DistribuidorController{
    public async listarClientes (req: Request,res: Response) {
        const {cedula}= req.params
        const clientes= await db.query('SELECT USUARIO.nombre, CLIENTE.cedula, DOMINIO.nom_dominio, DOMINIO.cod_dominio, PLANPAGO.nom_p_pago FROM CLIENTE, DOMINIO, PLANPAGO, DISTRIBUIDOR, USUARIO WHERE CLIENTE.cod_p_pago=PLANPAGO.cod_p_pago AND DOMINIO.cedula=CLIENTE.cedula AND USUARIO.cedula=CLIENTE.cedula AND DISTRIBUIDOR.cedula=?',[cedula]);
        res.json(clientes);
    } 

    public async selClientes (req: Request,res: Response) {
        const {cedula}= req.params
        const clientes= await db.query('SELECT USUARIO.nombre, CLIENTE.cedula FROM CLIENTE, USUARIO, DISTRIBUIDOR WHERE USUARIO.cedula=CLIENTE.cedula AND CLIENTE.cedula_distribuidor=DISTRIBUIDOR.cedula AND DISTRIBUIDOR.cedula=5',[cedula]);
        res.json(clientes);
    } 

    public async obtenerDistribuidor (req: Request,res: Response) {
        const {cedula} = req.params;
        const distribuidor = await db.query("SELECT DISTRIBUIDOR.cedula, USUARIO.correo, USUARIO.nombre, USUARIO.contrasenia, DISTRIBUIDOR.cod_t_distribuidor, T_DISTRIBUIDOR.nom_t_distribuidor, T_DISTRIBUIDOR.val_comision FROM DISTRIBUIDOR, T_DISTRIBUIDOR, USUARIO WHERE USUARIO.cedula = DISTRIBUIDOR.cedula AND DISTRIBUIDOR.cod_t_distribuidor=T_DISTRIBUIDOR.cod_t_distribuidor AND DISTRIBUIDOR.cedula=?", cedula);
        if(distribuidor. length > 0){
            return res.json(distribuidor[0]);
        }
        return res.status(404).json({text: 'No existe el clidistribuidorente'});
    } 

   public async crearCliente(req:Request, res:Response): Promise<void>{
      let cedula_distribuidor = parseInt(req.params.cedula)
      let cedula_cliente = req.body.cedula
      console.log(req.body)
        await db.query('INSERT INTO USUARIO VALUES ('+(+cedula_cliente+",'"+req.body.correo+ "','"+ req.body.nombre+ "','"+ req.body.contrasenia+ "',2)"));
        await db.query("UPDATE CLIENTE SET cod_p_pago="+parseInt(req.body.cod_p_pago)+", cod_paquete="+ parseInt(req.body.cod_paquete)+", cedula_distribuidor="+cedula_distribuidor+" WHERE cedula="+req.body.cedula);
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

    public async historialPQRDistribuidor (req: Request,res: Response): Promise<any> {
        const {cedula} = req.params;
        const cliente = await db.query('SELECT TICKET.descripcion, ESTADO.nom_estado, TICKET.respuesta, T_TICKET.nom_t_ticket FROM USUARIO, CLIENTE, DOMINIO, ESTADO, TICKET, T_TICKET WHERE CLIENTE.cedula = DOMINIO.cedula AND DOMINIO.cod_dominio = TICKET.cod_dominio AND T_TICKET.cod_t_ticket = TICKET.cod_t_ticket AND ESTADO.cod_estado=TICKET.cod_estado AND USUARIO.cedula = CLIENTE.cedula AND USUARIO.cedula=?',cedula);
        if(cliente. length > 0){
            return res.json(cliente);
        }
        return res.status(404).json({text: 'Historial de distribuidor obtenido '});
    }

    public async editarDistribuidor(req:Request, res:Response): Promise<void>{
        const {cedula} = req.params;
        console.log(req.body)
        
        await db.query("UPDATE USUARIO SET nombre='"+req.body.nombre+"' WHERE cedula=?", [cedula]);
        await db.query("UPDATE USUARIO SET correo='"+req.body.correo+"' WHERE cedula=?", [cedula]);
        await db.query("UPDATE USUARIO SET contrasenia='"+req.body.contrasenia+"' WHERE cedula=?", [cedula]);
        res.json({text: 'Actualizando distribuidor '});
    }

    public async obtenerDominiosDistribuidor(req: Request,res: Response): Promise<any> {
        const {cedula} = req.params;
        const dominios = await db.query('SELECT DOMINIO.cod_dominio, DOMINIO.nom_dominio, USUARIO.nombre, DOMINIO.cod_registrador FROM DOMINIO, USUARIO, REGISTRADOR, CLIENTE WHERE DOMINIO.cedula=USUARIO.cedula AND REGISTRADOR.cod_registrador=DOMINIO.cod_registrador AND CLIENTE.cedula=DOMINIO.cedula AND CLIENTE.cedula_distribuidor=?',cedula);
        if(dominios. length > 0){
            return res.json(dominios);
        }
        return res.status(404).json({text: 'Dominios cliente obtenidos '});
    }

    public async obtenerRegistrador(req: Request,res: Response): Promise<any> {
        console.log(req.params.cod_registrador)
        const registrador = await db.query('SELECT USUARIO.nombre FROM USUARIO, REGISTRADOR WHERE USUARIO.cedula=REGISTRADOR.cod_registrador AND REGISTRADOR.cod_registrador=?',[req.params.cod_registrador]);
        if(registrador. length > 0){
            return res.json(registrador);
        }
        return res.status(404).json({text: 'Registrador obtenido'});
    }

    public async crearDominio(req:Request, res:Response): Promise<void>{
        console.log(req.body)
        await db.query("INSERT INTO DOMINIO VALUES (6,"+req.body.cedula+",'"+req.body.nom_dominio+"',"+req.params.cedula+",'"+req.body.descripcion+"')");
        res.json({text: 'Dominio Creado'});
        
    }
}
const distribuidorController = new DistribuidorController();
export default distribuidorController;