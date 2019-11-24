import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-empleado',
  templateUrl: './inicio-empleado.component.html',
  styleUrls: ['./inicio-empleado.component.css']
})
export class InicioEmpleadoComponent implements OnInit {

  nombreEmpleado = 'Raul';

  constructor() { }

  ngOnInit() {
  }

}
