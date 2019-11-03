import {Request, Response} from 'express';
import db from '../../database';
class AdminController{
    public listarClientes (req: Request,res: Response) {
        db.query('DESCRIBE cliente');
        res.json('Listando admins');
    } 
    public getOne (req: Request,res: Response) {
        db.query('DESCRIBE cliente');
        res.json('Listando admin ' + req.params.cedula);
    } 
    public create(req:Request, res:Response){
        res.json({text: 'Creando un administrador'});
    }

    public update(req:Request, res:Response){
        res.json({text: 'Aditando un administrador ' + req.params.cedula});
    }
}

const adminController = new AdminController();
export default adminController;