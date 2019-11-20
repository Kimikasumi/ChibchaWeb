import {Router} from 'express';
import usuarioController from '../controllers/usuarioController'
class UsuarioRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.post('/sesion', usuarioController.iniciarSesion);
    }
}

const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;