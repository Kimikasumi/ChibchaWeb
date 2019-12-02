import {Router} from 'express';
import empleadoController from '../controllers/empleadoController'

class EmpleadoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/ticket/:cod_t_empleado', empleadoController.listarSolicitudes);

        this.router.get('/ticket/get/:cod_ticket', empleadoController.obtenerTicketBasico);
        this.router.get('/ticket/host/:cod_ticket', empleadoController.obtenerHoster);

        this.router.put('/ticket/responderErr/:cod_ticket/:cedula', empleadoController.responderTicketErr);
        this.router.put('/ticket/responderPqr/:cod_ticket/:cedula', empleadoController.responderTicketPqr);
        this.router.put('/ticket/responderDom/:cod_ticket/:cedula', empleadoController.responderTicketDom);



        this.router.get('/opciones/PlanesPago', empleadoController.obtenerPlanesPago);
        this.router.get('/opciones/Registradores', empleadoController.obtenerRegistradores);
        this.router.get('/opciones/Paquetes', empleadoController.obtenerPaquetes);

        this.router.put('/ticket/responderND', empleadoController.responderTicketND);
        this.router.put('/ticket/responderCH', empleadoController.responderTicketCH);
        this.router.put('/ticket/responderCPP', empleadoController.responderTicketCPP);
        this.router.put('/ticket/responderCP', empleadoController.responderTicketCP);

    }
}

const empleadoRoutes = new EmpleadoRoutes();
export default empleadoRoutes.router;