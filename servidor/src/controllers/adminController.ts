import {Request, Response} from 'express';
import db from '../database';
class AdminController{

    /** EMPLEADO */
    public async listarEmpleados (req: Request,res: Response) {
        const empleados= await db.query('SELECT EMPLEADO.cedula, USUARIO.nombre, USUARIO.correo, T_EMPLEADO.nom_t_empleado FROM EMPLEADO, T_EMPLEADO, USUARIO WHERE EMPLEADO.cedula=USUARIO.cedula AND EMPLEADO.cod_t_empleado=T_EMPLEADO.cod_t_empleado');
        res.json(empleados);
    } 
    public async obtenerEmpleado (req: Request,res: Response): Promise<any> {
        const cedula_empleado = parseInt(req.params.cedulaEmpleado);
        const empleado = await db.query('SELECT EMPLEADO.cedula, USUARIO.nombre, USUARIO.correo, T_EMPLEADO.nom_t_empleado FROM EMPLEADO, T_EMPLEADO, USUARIO WHERE EMPLEADO.cedula=USUARIO.cedula AND EMPLEADO.cod_t_empleado=T_EMPLEADO.cod_t_empleado AND USUARIO.cedula='+cedula_empleado);
        if(empleado. length > 0){
            return res.json(empleado[0]);
        }
        return res.status(404).json({text: 'No existe el empleado'});
    } 
    
    public async crearEmpleado(req:Request, res:Response): Promise<void>{
        await db.query('INSERT INTO USUARIO VALUES ('+req.body.cedula+",'"+req.body.correo+ "','"+ req.body.nombre+ "','"+ req.body.contrasenia+ "',4)");
        await db.query('UPDATE EMPLEADO SET cod_t_empleado='+parseInt(req.body.cod_t_empleado)+' WHERE cedula='+req.body.cedula);
        res.json({text: 'Empleado creado'});
        
    }

    public async editarEmpleado(req:Request, res:Response): Promise<void>{
        const {cedula_empleado} = req.params;
        console.log(req.body)
        await db.query('UPDATE EMPLEADO SET cod_t_empleado='+req.body.cod_t_empleado+' WHERE cedula=?',[cedula_empleado]);
        await db.query("UPDATE USUARIO SET correo='"+req.body.correo+"', nombre='"+req.body.nombre+"' WHERE cedula=?",parseInt(req.body.ceducedula_empleadola));
        res.json({text: 'Actualizando empleado '+ req.params.cedula_empleado});
    }

    public async eliminarEmpleado(req:Request, res:Response): Promise<void>{
        const {cedula_empleado} = req.params;
        await db.query('DELETE FROM EMPLEADO WHERE cedula= ?', [cedula_empleado]);
        await db.query('DELETE FROM USUARIO WHERE cedula= ?', [cedula_empleado]);
        res.json({text: 'Borrando empleado '+ req.params.cedula_empleado});
    }

    /** DISTRIBUIDOR */
    public async listarDistribuidores (req: Request,res: Response) {
        const distribuidores= await db.query('SELECT DISTRIBUIDOR.cedula, USUARIO.nombre, USUARIO.correo, T_DISTRIBUIDOR.nom_t_distribuidor FROM DISTRIBUIDOR, T_DISTRIBUIDOR, USUARIO WHERE DISTRIBUIDOR.cedula<>0 AND DISTRIBUIDOR.cedula=USUARIO.cedula AND DISTRIBUIDOR.cod_t_distribuidor=T_DISTRIBUIDOR.cod_t_distribuidor');
        res.json(distribuidores);
    } 
    public async obtenerDistribuidor (req: Request,res: Response): Promise<any> {
        const cedula_distribuidor = parseInt(req.params.cedulaDistribuidor);
        const distribuidor = await db.query('SELECT DISTRIBUIDOR.cedula, USUARIO.nombre, USUARIO.correo, T_DISTRIBUIDOR.nom_t_distribuidor FROM DISTRIBUIDOR, T_DISTRIBUIDOR, USUARIO WHERE DISTRIBUIDOR.cedula=USUARIO.cedula AND DISTRIBUIDOR.cod_t_distribuidor=T_DISTRIBUIDOR.cod_t_distribuidor AND USUARIO.cedula='+cedula_distribuidor);
        if(distribuidor. length > 0){
            return res.json(distribuidor[0]);
        }
        return res.status(404).json({text: 'No existe el distribuidor'});
    } 
    
    public async crearDistribuidor(req:Request, res:Response): Promise<void>{
        console.log(req.body)
        await db.query('INSERT INTO USUARIO VALUES ('+parseInt(req.body.cedula)+",'"+req.body.correo+ "','"+ req.body.nombre+ "','"+ req.body.contrasenia+"',5)");
        await db.query('UPDATE DISTRIBUIDOR SET cod_t_distribuidor='+req.body.cod_t_distribuidor+' WHERE cedula='+req.body.cedula);
        res.json({text: 'Distribuidor creado'});
        
    }

    public async editarDistribuidor(req:Request, res:Response): Promise<void>{
        const {cedula_distribuidor} = req.params;
        console.log(cedula_distribuidor)
        await db.query('UPDATE DISTRIBUIDOR SET cod_t_distribuidor='+req.body.cod_t_distribuidor+' WHERE cedula=?',cedula_distribuidor);
        await db.query("UPDATE USUARIO SET correo='"+req.body.correo+"', nombre='"+req.body.nombre+"' WHERE cedula=?",parseInt(req.body.cedula_distribuidor));
        res.json({text: 'Actualizando distribuidor '+ req.params.cedula});
    }

    public async eliminarDistribuidor(req:Request, res:Response): Promise<void>{
        const {cedula_distribuidor} = req.params;
        await db.query('DELETE FROM DISTRIBUIDOR WHERE cedula= ?', [cedula_distribuidor]);
        await db.query('DELETE FROM USUARIO WHERE cedula= ?', [cedula_distribuidor]);
        res.json({text: 'Borrando distribuidor '+ req.params.cedula_distribuidor});
    }
    
    
    public async obtenerCliDis(req:Request, res:Response): Promise<void>{
        const cedula_distribuidor = parseInt(req.params.cedula);
        
        //const cantidad =await db.query("CALL consultarComision("+cedula_distribuidor+")");
        const cantidad =await db.query("SELECT consultarComisionF("+cedula_distribuidor+") as Respuesta");
        const valor=cantidad[0].Respuesta
        const porcentaje = await db.query("SELECT val_comision as P FROM T_DISTRIBUIDOR, DISTRIBUIDOR WHERE T_DISTRIBUIDOR.cod_t_distribuidor = distribuidor.cod_t_distribuidor AND DISTRIBUIDOR.cedula="+cedula_distribuidor);
        const resultado = parseInt(valor)*parseInt(porcentaje[0].P)/100
        console.log(resultado)
        res.json(resultado);
    }
    

    /**REGISTRADOR DE DOMINIO */

    public async listarRegistrador (req: Request,res: Response) {
        const registradores= await db.query('SELECT REGISTRADOR.cod_registrador, USUARIO.nombre, USUARIO.correo, PAIS.nom_pais FROM REGISTRADOR, PAIS, USUARIO WHERE REGISTRADOR.cod_registrador=USUARIO.cedula AND REGISTRADOR.cod_pais=PAIS.cod_pais');
        res.json(registradores);
    } 
    public async obtenerRegistrador (req: Request,res: Response): Promise<any> {
        const cedula_r = parseInt(req.params.cedulaRegistrador);
        const registrador = await db.query('SELECT REGISTRADOR.cod_registrador, USUARIO.nombre, USUARIO.correo, PAIS.nom_pais FROM REGISTRADOR, PAIS, USUARIO WHERE REGISTRADOR.cod_registrador=USUARIO.cedula AND REGISTRADOR.cod_pais=PAIS.cod_pais AND USUARIO.cedula='+cedula_r);
        if(registrador. length > 0){
            return res.json(registrador[0]);
        }
        return res.status(404).json({text: 'No existe el registrador'});
    } 
    
    public async crearRegistrador(req:Request, res:Response): Promise<void>{
        const cod_reg=parseInt(req.body.cod_registrador);
        await db.query('INSERT INTO USUARIO VALUES ('+cod_reg+",'"+req.body.correo+ "','"+ req.body.nombre+ "','"+ req.body.contrasenia+ "',3)");
        await db.query('UPDATE REGISTRADOR SET cod_pais='+req.body.cod_pais+' WHERE cod_registrador='+req.body.cod_registrador);
        res.json({text: 'Registrador creado'});
        
    }

    public async editarRegistrador(req:Request, res:Response): Promise<void>{
        const {cod_registrador} = req.params;
        await db.query('UPDATE REGISTRADOR SET cod_pais='+req.body.cod_pais+' WHERE cod_registrador=?',cod_registrador);
        await db.query("UPDATE USUARIO SET correo='"+req.body.correo+"', nombre='"+req.body.nombre+"' WHERE cedula=?",parseInt(req.body.cod_registrador));
        res.json({text: 'Actualizando distribuidor '+ req.params.cod_registrador});
        
    }

    public async eliminarRegistrador(req:Request, res:Response): Promise<void>{
        const {cod_registrador} = req.params;
        await db.query('DELETE FROM REGISTRADOR WHERE cod_registrador= ?', [cod_registrador]);
        await db.query('DELETE FROM USUARIO WHERE cedula= ?', [cod_registrador]);
        res.json({text: 'Borrando registrador '+ req.params.cod_registrador});
    }

    public async selPaises(req:Request, res:Response): Promise<any>{
        const paises = await db.query('SELECT cod_pais, nom_pais FROM PAIS');
        if(paises. length > 0){
            return res.json(paises);
        }
        return res.status(404).json({text: 'No existe el paises'});
    }

    public async obtenerAdmin (req: Request,res: Response): Promise<any> {
        const {cedula} = req.params;
        const admin = await db.query("SELECT usuario.nombre , usuario.correo FROM usuario , administrador WHERE usuario.cedula=administrador.cedula and usuario.cedula= ?", cedula);
        if(admin. length > 0){
            return res.json(admin[0]);
        }
        return res.status(404).json({text: 'No existe el admin'});
    }

}

const adminController = new AdminController();
export default adminController;