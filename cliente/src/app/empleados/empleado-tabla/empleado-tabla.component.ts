import { Component, OnInit } from '@angular/core';

export interface Solicitud {
  Tipo: string;
  Cliente: string;
}

const ELEMENT_DATA: Solicitud[] = [
  {Tipo: 'Nuevo Dominio', Cliente: 'Carlos'},
  {Tipo: 'Cambio domino', Cliente: 'Maria'},
  {Tipo: 'Cambio plan de pago', Cliente: 'Rekkles'},
  {Tipo: 'Cambio plan de pago', Cliente: 'Rekkles'},
  {Tipo: 'Cambio plan de pago', Cliente: 'Rekkles'},
  {Tipo: 'Cambio plan de pago', Cliente: 'Rekkles'},
  {Tipo: 'Cambio plan de pago', Cliente: 'Rekkles'},
  {Tipo: 'Cambio plan de pago', Cliente: 'Rekkles'},
];

@Component({
  selector: 'app-empleado-tabla',
  templateUrl: './empleado-tabla.component.html',
  styleUrls: ['./empleado-tabla.component.css']
})
export class EmpleadoTablaComponent implements OnInit {
  displayedColumns: string[] = ['Tipo', 'Cliente', 'abrir'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
