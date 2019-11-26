import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

export interface Paquete {
  cod_paquete: number;
  nom_paquete: string;
}

@Component({
  selector: 'app-solicitud-cpaquete',
  templateUrl: './solicitud-cpaquete.component.html',
  styleUrls: ['./solicitud-cpaquete.component.css']
})
export class SolicitudCpaqueteComponent implements OnInit {

  paquetes: Paquete[] = [
    {cod_paquete: 1, nom_paquete: 'Chibcha-plata'},
    {cod_paquete: 2, nom_paquete: 'Chibcha-oro'},
    {cod_paquete: 3, nom_paquete: 'Chibcha-platino'}
  ];

  nombreCliente = 'pedro';
  paquete = 'Chibcha-plata';
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
