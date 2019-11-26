import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

export interface Opcion {
  cod_op: number;
  nomOp: string;
}

@Component({
  selector: 'app-registrador-solicitud',
  templateUrl: './registrador-solicitud.component.html',
  styleUrls: ['./registrador-solicitud.component.css']
})
export class RegistradorSolicitudComponent implements OnInit {

  opciones: Opcion[] = [
    {cod_op: 1, nomOp: 'Aceptar'},
    {cod_op: 2, nomOp: 'Denegar'}
  ];

  nomDom = 'Pajarito';
  nomCliente = 'Carlos';
  descDom = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci animi architecto atque consectetur\n' +
    '        consequatur debitis, dolor esse nobis officiis, provident quasi rem similique tempore voluptatibus? Nisi\n' +
    '        provident quidem quos.\n';
  descSolicitud = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci animi architecto atque consectetur\n' +
    '        consequatur debitis, dolor esse nobis officiis, provident quasi rem similique tempore voluptatibus? Nisi\n' +
    '        provident quidem quos.\n';

  constructor(private router: Router) {
  }

  enviar() {
    this.router.navigate(['registrador/tabla']);
  }

  regresar() {
    this.router.navigate(['registrador/tabla']);
  }

  ngOnInit() {
  }

}
