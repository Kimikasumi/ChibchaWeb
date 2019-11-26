import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

export interface Pqr {
  cod_pqr: number;
  descrip: string;
}

@Component({
  selector: 'app-empleado-pqr',
  templateUrl: './empleado-pqr.component.html',
  styleUrls: ['./empleado-pqr.component.css']
})
export class EmpleadoPqrComponent implements OnInit {

  pqr: Pqr[] = [
    {cod_pqr: 1, descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci animi architecto atque consectetur\n' +
        '        consequatur debitis, dolor esse nobis officiis, provident quasi rem similique tempore voluptatibus? Nisi\n' +
        '        provident quidem quos.\n'}
  ];

  nombreCliente = 'pedro';
  planPago = 'Anual';
  paquete = 'Chibcha-oro';
  nomDom = 'Pajarito';

  constructor(private router: Router) { }

  enviar() {
    this.router.navigate(['empleado/solicitudes']);
  }

  regresar() {
    this.router.navigate(['empleado/solicitudes']);
  }

  ngOnInit() {
  }

}
