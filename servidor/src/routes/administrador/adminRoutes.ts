import {Router} from 'express';
import adminController from '../../controllers/administrador/adminController'
class AdminRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/empleado', adminController.listarClientes);
        this.router.get('/empleado/:cedula', adminController.getOne);
        this.router.post('/empleado',adminController.create);
        this.router.put('/empleado/:cedula', adminController.update);

        this.router.get('/distribuidor', adminController.listarClientes);
        this.router.get('/distribuidor/:cedula', adminController.getOne);
        this.router.post('/distribuidor',adminController.create);
        this.router.put('/distribuidor/:cedula', adminController.update);

        this.router.get('/regDominio', adminController.listarClientes);
        this.router.get('/regDominio/:cedula', adminController.getOne);
        this.router.post('/regDominio',adminController.create);
        this.router.put('/regDominio/:cedula', adminController.update);
    }
}

const adminRoutes = new AdminRoutes();
export default adminRoutes.router;