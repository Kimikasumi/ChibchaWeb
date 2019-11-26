import {Router} from 'express';
import registradorController from '../controllers/registradorController'
class RegistradorRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/dominio', registradorController.listarDominios);
        this.router.get('/dominio/get', registradorController.obtenerDominio);
        this.router.put('/dominio/aceptar',registradorController.aceptarDominio);
        this.router.put('/dominio/rechazar',registradorController.rechazarDominio);
        this.router.put('/dominio/delete', registradorController.eliminarDominio);
        this.router.put('/dominio/perfil', registradorController.editarRegistrador);
        this.router.get('/solicitudes', registradorController.listarSolicitudes);
        this.router.get('/solicitudes/get', registradorController.obtenerSolicitud);

    }
}

const registradorRoutes = new RegistradorRoutes();
export default registradorRoutes.router;