import {Router} from 'express';
import adminController from '../../controllers/administrador/adminController'
class AdminRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', adminController.list);
        this.router.get('/:cedula', adminController.getOne);
        this.router.post('/',adminController.create);
        this.router.put('/:cedula', adminController.update)
    }
}

const adminRoutes = new AdminRoutes();
export default adminRoutes.router;