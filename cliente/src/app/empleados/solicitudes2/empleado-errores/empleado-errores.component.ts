import {Component, OnInit} from '@angular/core';
import {EmpleadoService} from '../../../service/empleado.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ITicketE} from '../../../models/ITicket';

@Component({
  selector: 'app-empleado-errores',
  templateUrl: './empleado-errores.component.html',
  styleUrls: ['./empleado-errores.component.css']
})
export class EmpleadoErroresComponent implements OnInit {

  infoTicket: any = [];

  ticket: ITicketE = {
    resp: '',
    cedula: 0,
    cod_paquete: 0,
    cod_p_pago: 0
  };

  constructor(private empleadoService: EmpleadoService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (localStorage.getItem('cedula') == null) {
      this.router.navigate(['']);
    }
    this.cargarInfo();
  }

  private cargarInfo() {
    const codTicket: number = parseInt(localStorage.getItem('codTicket'), 10);
    this.empleadoService.cargarTicket(codTicket).subscribe(
      res => {
        this.infoTicket = res;
        console.log(this.infoTicket);
      }
    );
  }

  regresar() {
    this.router.navigate(['empleado/solicitudes/' + localStorage.getItem('cedula')]);
  }

  enviar(respuesta: string) {
    console.log(respuesta);
    this.ticket.resp = respuesta;
    const codTicket: number = parseInt(localStorage.getItem('codTicket'), 10);
    const codEmpleado: number = parseInt(localStorage.getItem('cedula'), 10);

    this.empleadoService.responderErr(codTicket, codEmpleado, this.ticket).subscribe(
      res => {
        this.router.navigate(['empleado/solicitudes/' + localStorage.getItem('cedula')]);
        console.log(codTicket + ' ' + respuesta + ' ' + codEmpleado);
      }
    );
  }
}
