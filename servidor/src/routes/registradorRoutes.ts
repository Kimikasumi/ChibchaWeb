import {Router} from 'express';
import registradorController from '../controllers/registradorController'
class RegistradorRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/dominio', registradorController.listarDominios);

        this.router.post('/dominio/get', registradorController.obtenerDominio);
        this.router.put('/dominio/aceptar',registradorController.aceptarDominio);
        this.router.put('/dominio/rechazar',registradorController.rechazarDominio);
        this.router.put('/dominio/aceptar/:cod_registrador/:cod_ticket/:cod_dominio',registradorController.aceptarDominio);
        this.router.put('/dominio/rechazar/:cod_registrador/:cod_ticket/:cod_dominio',registradorController.rechazarDominio);

        this.router.put('/dominio/delete', registradorController.eliminarDominio);

        this.router.put('/dominio/perfil', registradorController.editarRegistrador);
        this.router.get('/solicitudes/:cod_registrador', registradorController.listarSolicitudes);
        this.router.get('/solicitudes/:cod_registrador/:cod_ticket', registradorController.obtenerSolicitud);

    }
}

const registradorRoutes = new RegistradorRoutes();
export default registradorRoutes.router;