import {Component, OnInit} from '@angular/core';
import {EmpleadoService} from '../../service/empleado.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-inicio-empleado',
  templateUrl: './inicio-empleado.component.html',
  styleUrls: ['./inicio-empleado.component.css']
})
export class InicioEmpleadoComponent implements OnInit {

  nombreEmpleado = localStorage.getItem('nombre');

  constructor(private empleadoService: EmpleadoService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (localStorage.getItem('cedula') == null) {
      console.log('no entró');
      this.router.navigate(['']);
      console.log('no entró');
    }
  }

}
