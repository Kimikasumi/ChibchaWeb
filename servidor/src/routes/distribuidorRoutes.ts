import {Router} from 'express';
import distribuidorController from '../controllers/distribuidorController'
class DistribuidorRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/clientes/:cedula', distribuidorController.listarClientes);
        this.router.post('/clientes/:cedula', distribuidorController.crearCliente);
        this.router.delete('/clientes', distribuidorController.eliminarCliente);
        this.router.get('/solicitudes/:cedula', distribuidorController.historialPQRDistribuidor);
        this.router.get('/get/:cedula', distribuidorController.obtenerDistribuidor);
        this.router.put('/edit/:cedula', distribuidorController.editarDistribuidor);
        this.router.get('/clientes/dominios/:cedula', distribuidorController.obtenerDominiosDistribuidor);
        this.router.get('/clientes/dominios/registrador/:cedula/:cod_registrador', distribuidorController.obtenerRegistrador);
        this.router.post('/clientes/dominios/registrador/:cedula', distribuidorController.crearDominio);
        this.router.get('/clientes/dominios/select/:cedula', distribuidorController.selClientes);
        

    }
}

const distribuidorRoutes = new DistribuidorRoutes();
export default distribuidorRoutes.router;