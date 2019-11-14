import {Router} from 'express';
import registradorController from '../controllers/registradorController'
class RegistradorRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/dominio', registradorController.listarDominios);
        this.router.get('/dominio/:cod_dominio', registradorController.obtenerDominio);
        this.router.post('/dominio',registradorController.crearDominio);
        this.router.delete('/dominio/:cod_dominio', registradorController.eliminarDominio);

    }
}

const registradorRoutes = new RegistradorRoutes();
export default registradorRoutes.router;