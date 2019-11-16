import {Router} from 'express';
import distribuidorController from '../controllers/distribuidorController'
class DistribuidorRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/clientes', distribuidorController.listarClientes);
        this.router.post('/clientes', distribuidorController.crearCliente);
    }
}

const distribuidorRoutes = new DistribuidorRoutes();
export default distribuidorRoutes.router;