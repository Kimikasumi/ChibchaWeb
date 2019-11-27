import {Router} from 'express';
import clienteController from '../controllers/clienteController'
class ClienteRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.post('/crear',clienteController.crearCliente);
        this.router.get('/:cedula', clienteController.obtenerCliente);
        this.router.post('/solicitud/:cedula', clienteController.crearSolicitud);
    }
}

const clienteRoutes = new ClienteRoutes();
export default clienteRoutes.router;