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
        this.router.get('/dominio/:cedula', clienteController.obtenerDominiosCliente)
        this.router.post('/crearTarjeta', clienteController.agregarTarjeta)
        this.router.put('/editarCliente/:cedula', clienteController.editarCliente)
        this.router.get('/cargarPQR/:cedula', clienteController.historialPQRCliente)

    }
}

const clienteRoutes = new ClienteRoutes();
export default clienteRoutes.router;