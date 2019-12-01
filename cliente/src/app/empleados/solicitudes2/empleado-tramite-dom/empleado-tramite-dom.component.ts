import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from '../../../service/empleado.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-empleado-tramite-dom',
  templateUrl: './empleado-tramite-dom.component.html',
  styleUrls: ['./empleado-tramite-dom.component.css']
})
export class EmpleadoTramiteDomComponent implements OnInit {

  infoTicket: any = [];
  inforHoster: any = [];
  hostsDisp: any = [];

  constructor(private empleadoService: EmpleadoService, private router: Router, private activateRoute: ActivatedRoute) { }

  regresar() {
    this.router.navigate(['empleado/solicitudes/' + localStorage.getItem('cedula')]);
  }

  enviar() {
    return null;
  }

  ngOnInit() {
    if (localStorage.getItem('codRegistrador') == null) {
      this.router.navigate(['']);
    }
    this.cargarInfo();
    this.cargarHosts();
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

  cargarHost() {
    const codTicket: number = parseInt(localStorage.getItem('codTicket'), 10);
    this.empleadoService.cargarHoster(codTicket).subscribe(
      res => {
        this.inforHoster = res;
        console.log(this.inforHoster);
      }
    );
  }

  cargarHosts() {
    this.empleadoService.obtenerRegistradores().subscribe(
      res => {
        this.hostsDisp = res;
        console.log(this.hostsDisp);
      }
    );
  }

}
