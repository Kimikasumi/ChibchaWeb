import {Router} from 'express';
import empleadoController from '../controllers/empleadoController'
class EmpleadoRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/ticket/:cod_t_empleado', empleadoController.listarSolicitudes);

        this.router.get('/ticket/get/:cod_ticket', empleadoController.obtenerTicketBasico);
        this.router.get('/ticket/host/:cod_ticket', empleadoController.obtenerHoster);


        this.router.put('/ticket/responderND', empleadoController.responderTicketND);
        this.router.put('/ticket/responderCH', empleadoController.responderTicketCH);
        this.router.put('/ticket/responderCPP', empleadoController.responderTicketCPP);
        this.router.put('/ticket/responderCP', empleadoController.responderTicketCP);
        this.router.put('/ticket/responderPQR', empleadoController.responderTicketPQR);

        this.router.get('/opciones/PlanesPago', empleadoController.obtenerPlanesPago);
        this.router.get('/opciones/Registradores', empleadoController.obtenerRegistradores);
        this.router.get('/opciones/Paquetes', empleadoController.obtenerPaquetes);
    }
}

const empleadoRoutes = new EmpleadoRoutes();
export default empleadoRoutes.router;