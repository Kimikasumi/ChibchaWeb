import {Router} from 'express';
import adminController from '../../controllers/administrador/adminController'
class AdminRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', adminController.index);
    }
}

const adminRoutes = new AdminRoutes();
export default adminRoutes.router;