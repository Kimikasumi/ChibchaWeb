import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmpleadoService} from '../../service/empleado.service';

@Component({
  selector: 'app-empleado-tabla',
  templateUrl: './empleado-tabla.component.html',
  styleUrls: ['./empleado-tabla.component.css']
})
export class EmpleadoTablaComponent implements OnInit {

  ticketsEmpleado: any = [];

  constructor(private empleadoService: EmpleadoService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  navegar(codTick: number) {
    this.router.navigate(['empleado/ticket/get/' + localStorage.getItem('cedula') + '/' + codTick]);
    localStorage.setItem('codTicket', String(codTick));
  }

  ngOnInit() {
    if (localStorage.getItem('cedula') == null) {
      this.router.navigate([' ']);
    }
    this.cargarSolicitud();
  }

  cargarSolicitud() {
    const codigo: number = parseInt(localStorage.getItem('tEmpleado'), 10);
    this.empleadoService.cargarSolicitudes(codigo).subscribe(
      res => {
        this.ticketsEmpleado = res;
        console.log(this.ticketsEmpleado);
      }
    );
  }

}
