import {Router} from 'express';
import adminController from '../../controllers/administrador/adminController'
class AdminRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/empleado', adminController.listarEmpleados);
        this.router.get('/empleado/:cedula', adminController.obtenerEmpleado);
        this.router.post('/empleado',adminController.crearEmpleado);
        this.router.put('/empleado/:cedula', adminController.editarEmpleado);
        this.router.delete('/empleado/:cedula', adminController.eliminarEmpleado);

        this.router.get('/distribuidor', adminController.listarEmpleados);
        this.router.get('/distribuidor/:cedula', adminController.obtenerEmpleado);
        this.router.post('/distribuidor',adminController.crearEmpleado);
        this.router.put('/distribuidor/:cedula', adminController.editarEmpleado);
        this.router.delete('/distribuidor/:cedula', adminController.eliminarEmpleado);


        this.router.get('/regDominio', adminController.listarEmpleados);
        this.router.get('/regDominio/:cedula', adminController.obtenerEmpleado);
        this.router.post('/regDominio',adminController.crearEmpleado);
        this.router.put('/regDominio/:cedula', adminController.editarEmpleado);
        this.router.delete('/distribuidor/:cedula', adminController.eliminarEmpleado);

    }
}

const adminRoutes = new AdminRoutes();
export default adminRoutes.router;