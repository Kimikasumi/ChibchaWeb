import {Request, Response} from 'express';
import db from '../database';
class RegistradorController{

    /** DOMINIOS */
    public async listarDominios (req: Request,res: Response) {
        const cod_registrador= req.body.cod_registrador
        const dominios= await db.query('SELECT DOMINIO.cod_dominio, DOMINIO.nom_dominio, DOMINIO.cedula FROM DOMINIO WHERE DOMINIO.cod_registrador=?',parseInt(cod_registrador));
        res.json(dominios);
    } 
    public async obtenerDominio (req: Request,res: Response): Promise<any> {
        const aux = parseInt(req.body.cod_dominio)
        const dominio = await db.query('SELECT DOMINIO.cod_dominio, DOMINIO.nom_dominio, DOMINIO.cedula FROM DOMINIO WHERE DOMINIO.cod_dominio='+aux);
        if(dominio. length > 0){
            return res.json(dominio[0]);
        }
        return res.status(404).json({text: 'No existe el dominio'});
    } 
    
    public async aceptarDominio(req:Request, res:Response): Promise<void>{
        await db.query('UPDATE DOMINIO SET cod_registrador='+req.body.cod_registrador+' WHERE cod_dominio='+req.body.cod_dominio);
        res.json({text: 'Dominio aceptado'});
        
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