import {Router} from 'express';
import clienteController from '../controllers/clienteController'
class ClienteRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.post('/crear',clienteController.crearCliente);
    }
}

const clienteRoutes = new ClienteRoutes();
export default clienteRoutes.router;