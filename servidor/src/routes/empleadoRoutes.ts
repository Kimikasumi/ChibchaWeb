import {Router} from 'express';
import empleadoController from '../controllers/empleadoController'
class EmpleadoRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/ticket', empleadoController.listarSolicitudes);
        this.router.put('/ticket/responder', empleadoController.editarEmpleado);
    }
}

const empleadoRoutes = new EmpleadoRoutes();
export default empleadoRoutes.router;