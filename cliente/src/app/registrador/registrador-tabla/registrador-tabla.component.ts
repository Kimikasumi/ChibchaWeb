import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

export interface Solicitud {
  nombreDom: string;
}

const ELEMENT_DATA: Solicitud[] = [
  {nombreDom: 'Pajarito'},
  {nombreDom: 'CascadasBlue'},
  {nombreDom: 'RojelioMorelo'},
  {nombreDom: 'GuinsoGiso'}
];

@Component({
  selector: 'app-registrador-tabla',
  templateUrl: './registrador-tabla.component.html',
  styleUrls: ['./registrador-tabla.component.css']
})
export class RegistradorTablaComponent implements OnInit {

  displayedColumns: string[] = ['nomDom', 'abrir'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) {
  }

  navegar() {
    this.router.navigate([]);
  }

  ngOnInit() {
  }

}
