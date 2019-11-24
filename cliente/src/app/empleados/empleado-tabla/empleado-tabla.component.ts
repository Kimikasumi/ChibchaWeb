import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

export interface Solicitud {
  Tipo: string;
  Cliente: string;
  direc: string;
}

const ELEMENT_DATA: Solicitud[] = [
  {Tipo: 'Nuevo Dominio', Cliente: 'Carlos', direc: 'ndom'},
  {Tipo: 'Cambio host', Cliente: 'Maria', direc: 'chost'},
  {Tipo: 'Cambio plan de pago', Cliente: 'Rekkles', direc: 'cplan'},
];

@Component({
  selector: 'app-empleado-tabla',
  templateUrl: './empleado-tabla.component.html',
  styleUrls: ['./empleado-tabla.component.css']
})
export class EmpleadoTablaComponent implements OnInit {

  displayedColumns: string[] = ['Tipo', 'Cliente', 'abrir'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) {
  }

  navegar(page: Solicitud) {
    this.router.navigate(['empleado/' + page.direc]);
  }

  ngOnInit() {
  }

}
