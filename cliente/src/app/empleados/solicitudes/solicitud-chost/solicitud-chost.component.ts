import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

export interface Host {
  cod_host: number;
  nom_host: string;
}

export interface Cliente {
  nombreCliente: string;
  planPago: string;
  paquete: string;
  nomDom: string;
  descripcion: string;
  lastHost: string;
}

@Component({
  selector: 'app-solicitud-chost',
  templateUrl: './solicitud-chost.component.html',
  styleUrls: ['./solicitud-chost.component.css']
})

export class SolicitudChostComponent implements OnInit {

  hosts: Host[] = [
    {cod_host: 1, nom_host: 'WebHoster'},
    {cod_host: 2, nom_host: 'WebSindario'},
    {cod_host: 3, nom_host: 'Hostinger'}
  ];

  cliente: Cliente[] = [
    {
      nombreCliente: 'Pedro',
      planPago: 'Anual',
      paquete: 'Chibcha-oro',
      nomDom: 'Pajarito',
      lastHost: 'Hostinger',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci animi architecto atque consectetur\n' +
        '        consequatur debitis, dolor esse nobis officiis, provident quasi rem similique tempore voluptatibus? Nisi\n' +
        '        provident quidem quos.\n'
    }
  ];

  constructor(private router: Router) {
  }

  enviar() {
    this.router.navigate(['empleado/solicitudes']);
  }

  regresar() {
    this.router.navigate(['empleado/solicitudes']);
  }

  ngOnInit() {
  }

}
