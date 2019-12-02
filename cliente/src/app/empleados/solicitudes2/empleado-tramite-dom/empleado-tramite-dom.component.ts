import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from '../../../service/empleado.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ITicketE} from '../../../models/ITicket';

@Component({
  selector: 'app-empleado-tramite-dom',
  templateUrl: './empleado-tramite-dom.component.html',
  styleUrls: ['./empleado-tramite-dom.component.css']
})
export class EmpleadoTramiteDomComponent implements OnInit {

  infoTicket: any = [];
  inforHoster: any = [];
  hostsDisp: any = [];

  ticket: ITicketE = {
    resp: '',
    cedula: 0,
    cod_paquete: 0,
    cod_p_pago: 0
  };

  constructor(private empleadoService: EmpleadoService, private router: Router, private activateRoute: ActivatedRoute) { }

  regresar() {
    this.router.navigate(['empleado/solicitudes/' + localStorage.getItem('cedula')]);
  }

  enviar(respuesta: string, codRegistrador: number) {
    console.log(respuesta);
    this.ticket.resp = respuesta;
    this.ticket.cedula = codRegistrador;
    const codTicket: number = parseInt(localStorage.getItem('codTicket'), 10);
    const codEmpleado: number = parseInt(localStorage.getItem('cedula'), 10);

    this.empleadoService.responderDom(codTicket, codEmpleado, this.ticket).subscribe(
      res => {
        this.router.navigate(['empleado/solicitudes/' + localStorage.getItem('cedula')]);
        console.log(codTicket + ' ' + respuesta + ' ' + codEmpleado);
      }
    );
  }

  ngOnInit() {
    if (localStorage.getItem('cedula') == null) {
      this.router.navigate(['']);
    }
    this.cargarInfo();
    this.cargarHost();
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
