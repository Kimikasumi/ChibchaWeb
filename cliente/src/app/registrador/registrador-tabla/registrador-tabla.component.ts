import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClienteService} from '../../service/cliente.service';

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

  navegar() {
    this.router.navigate(['registrador/solicitud/' + localStorage.getItem('codRegistrador')]);
  }

  constructor(private clienteService: ClienteService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (localStorage.getItem('codRegistrador') == null) {
      this.router.navigate(['']);
    }
  }

}
