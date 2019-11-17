import {Router} from 'express';
import adminController from '../controllers/adminController'
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

        this.router.get('/distribuidor', adminController.listarDistribuidores);
        this.router.get('/distribuidor/:cedula', adminController.obtenerDistribuidor);
        this.router.post('/distribuidor',adminController.crearDistribuidor);
        this.router.put('/distribuidor/:cedula', adminController.editarDistribuidor);
        this.router.delete('/distribuidor/:cedula', adminController.eliminarDistribuidor);
        this.router.post('/distribuidor2', adminController.obtenerCliDis);

        this.router.get('/registrador', adminController.listarRegistrador);
        this.router.get('/registrador/:cod_registrador', adminController.obtenerRegistrador);
        this.router.post('/registrador',adminController.crearRegistrador);
        this.router.put('/registrador/:cod_registrador', adminController.editarRegistrador);
        this.router.delete('/registrador/:cod_registrador', adminController.eliminarRegistrador);

    }
}

const adminRoutes = new AdminRoutes();
export default adminRoutes.router;