import {Request, Response} from 'express';
import db from '../../database';
class AdminController{
    public index (req: Request,res: Response) {
        db.query('DESCRIBE cliente');
        res.json('games');
    } 
}

const adminController = new AdminController();
export default adminController;