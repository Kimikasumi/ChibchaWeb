import {Router} from 'express';
import distribuidorController from '../controllers/distribuidorController'
class DistribuidorRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/clientes/:cedula', distribuidorController.listarClientes);
        this.router.post('/clientes', distribuidorController.crearCliente);
        this.router.delete('/clientes', distribuidorController.eliminarCliente);
        this.router.get('/solicitudes/:cedula', distribuidorController.historialPQRDistribuidor);
    }
}

const distribuidorRoutes = new DistribuidorRoutes();
export default distribuidorRoutes.router;