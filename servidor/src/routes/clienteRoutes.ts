import {Router} from 'express';
import clienteController from '../controllers/clienteController'
class AdminRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.post('/cliente',clienteController.crearCliente);


    }
}

const adminRoutes = new AdminRoutes();
export default adminRoutes.router;