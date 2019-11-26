import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

export interface Host {
  cod_host: number;
  nom_host: string;
}


@Component({
  selector: 'app-solicitud-n-dom',
  templateUrl: './solicitud-n-dom.component.html',
  styleUrls: ['./solicitud-n-dom.component.css']
})
export class SolicitudNDomComponent implements OnInit {

  hosts: Host[] = [
    {cod_host: 1, nom_host: 'WebHoster'},
    {cod_host: 2, nom_host: 'WebSindario'},
    {cod_host: 3, nom_host: 'Hostinger'}
  ];

  nombreCliente = 'pedro';
  planPago = 'Anual';
  paquete = 'Chibcha-oro';
  nomDom = 'Pajarito';
  descripcion = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci animi architecto atque consectetur\n' +
    '        consequatur debitis, dolor esse nobis officiis, provident quasi rem similique tempore voluptatibus? Nisi\n' +
    '        provident quidem quos.\n';

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
