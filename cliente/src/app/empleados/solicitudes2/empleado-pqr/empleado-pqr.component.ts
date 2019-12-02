import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from '../../../service/empleado.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ITicketE} from '../../../models/ITicket';

@Component({
  selector: 'app-empleado-pqr',
  templateUrl: './empleado-pqr.component.html',
  styleUrls: ['./empleado-pqr.component.css']
})
export class EmpleadoPqrComponent implements OnInit {

  infoTicket: any = [];
  planesPago: any = [];
  paquetes: any = [];

  tcket: ITicketE = {
    resp: '',
    cedula: 0,
    cod_paquete: 0,
    cod_p_pago: 0
  };

  constructor(private empleadoService: EmpleadoService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    if (localStorage.getItem('cedula') == null) {
      this.router.navigate(['']);
    }
    this.cargarInfo();
    this.cargarPlanes();
    this.cargarPaquetes();
  }

  regresar() {
    this.router.navigate(['empleado/solicitudes/' + localStorage.getItem('cedula')]);
  }

  enviar(respuesta: string, pPlan: number, paquete: number) {
    console.log(respuesta, pPlan, paquete);
    this.tcket.resp = respuesta;
    this.tcket.cedula = parseInt(localStorage.getItem('cedula'), 10);
    this.tcket.cod_p_pago = pPlan;
    this.tcket.cod_paquete = paquete;
    const codTicket: number = parseInt(localStorage.getItem('codTicket'), 10);
    const codCliente: number = parseInt(localStorage.getItem('cedulaCliente'), 10);

    this.empleadoService.responderPqr(codTicket, codCliente, this.tcket).subscribe(
      res => {
        this.router.navigate(['empleado/solicitudes/' + localStorage.getItem('cedula')]);
        console.log('Se ha enviado una respuesta');
      }
    );
  }

  cargarPaquetes() {
    this.empleadoService.obtenerPaquetes().subscribe(
      res => {
        this.paquetes = res;
        console.log(this.paquetes);
      }
    );
  }

  cargarPlanes() {
    this.empleadoService.obtenerPlanesPago().subscribe(
      res => {
        this.planesPago = res;
        console.log(this.planesPago);
      }
    );
  }

  cargarInfo() {
    const codTicket: number = parseInt(localStorage.getItem('codTicket'), 10);
    this.empleadoService.cargarTicket(codTicket).subscribe(
      res => {
        this.infoTicket = res;
        console.log(this.infoTicket);
      }
    );
  }
}
