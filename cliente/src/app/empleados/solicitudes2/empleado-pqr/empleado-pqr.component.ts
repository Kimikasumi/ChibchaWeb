import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from '../../../service/empleado.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-empleado-pqr',
  templateUrl: './empleado-pqr.component.html',
  styleUrls: ['./empleado-pqr.component.css']
})
export class EmpleadoPqrComponent implements OnInit {

  infoTicket: any = [];
  planesPago: any = [];
  paquetes: any = [];

  constructor(private empleadoService: EmpleadoService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    if (localStorage.getItem('codRegistrador') == null) {
      this.router.navigate(['']);
    }
    this.cargarInfo();
    this.cargarPlanes();
    this.cargarPaquetes();
  }

  regresar() {
    this.router.navigate(['empleado/solicitudes/' + localStorage.getItem('cedula')]);
  }

  enviar() {
    return null;
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
