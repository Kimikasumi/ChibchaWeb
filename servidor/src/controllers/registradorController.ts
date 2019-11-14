import {Request, Response} from 'express';
import db from '../database';
class RegistradorController{

    /** DOMINIOS */
    public async listarDominios (req: Request,res: Response) {
        const dominios= await db.query('SELECT EMPLEADO.cedula, USUARIO.nombre, USUARIO.correo, T_EMPLEADO.nom_t_empleado FROM EMPLEADO, T_EMPLEADO, USUARIO WHERE EMPLEADO.cedula=USUARIO.cedula AND EMPLEADO.cod_t_empleado=T_EMPLEADO.cod_t_empleado');
        res.json(dominios);
    } 
    public async obtenerDominio (req: Request,res: Response): Promise<any> {
        const {cedula} = req.params;
        const empleado = await db.query('SELECT EMPLEADO.cedula, USUARIO.nombre, USUARIO.correo, T_EMPLEADO.nom_t_empleado FROM EMPLEADO, T_EMPLEADO, USUARIO WHERE EMPLEADO.cedula=USUARIO.cedula AND EMPLEADO.cod_t_empleado=T_EMPLEADO.cod_t_empleado AND USUARIO.cedula=?',[cedula]);
        if(empleado. length > 0){
            return res.json(empleado[0]);
        }
        return res.status(404).json({text: 'No existe el empleado'});
    } 
    
    public async crearDominio(req:Request, res:Response): Promise<void>{
        console.log("("+parseInt(req.body.cedula)+",'"+req.body.correo+ "','"+ req.body.nombre+ "','"+ req.body.contrasenia+ "',"+ parseInt(req.body.cod_t_usuario)+")");
        await db.query('INSERT INTO USUARIO VALUES ('+(+parseInt(req.body.cedula)+",'"+req.body.correo+ "','"+ req.body.nombre+ "','"+ req.body.contrasenia+ "',"+ parseInt(req.body.cod_t_usuario)+")"));
        await db.query('UPDATE EMPLEADO SET cod_t_empleado='+req.body.cod_t_empleado+' WHERE cedula='+req.body.cedula);
        res.json({text: 'Empleado creado'});
        
    }

    public async eliminarDominio(req:Request, res:Response): Promise<void>{
        const {cedula} = req.params;
        await db.query('DELETE FROM EMPLEADO WHERE cedula= ?', [cedula]);
        await db.query('DELETE FROM USUARIO WHERE cedula= ?', [cedula]);
        res.json({text: 'Borrando empleado '+ req.params.cedula});
    }
}
const registradorController = new RegistradorController();
export default registradorController;