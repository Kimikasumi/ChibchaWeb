import {Component, OnInit} from '@angular/core';
import {EmpleadoService} from '../../../service/empleado.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-empleado-errores',
  templateUrl: './empleado-errores.component.html',
  styleUrls: ['./empleado-errores.component.css']
})
export class EmpleadoErroresComponent implements OnInit {

  infoTicket: any = [];

  constructor(private empleadoService: EmpleadoService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (localStorage.getItem('codRegistrador') == null) {
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

  enviar() {
    return null;
  }
}
