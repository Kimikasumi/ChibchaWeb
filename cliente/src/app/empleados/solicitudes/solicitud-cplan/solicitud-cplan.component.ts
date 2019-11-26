import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

export interface PlanPago {
  cod_plan_pago: number;
  nom_plan_pago: string;
}

@Component({
  selector: 'app-solicitud-cplan',
  templateUrl: './solicitud-cplan.component.html',
  styleUrls: ['./solicitud-cplan.component.css']
})
export class SolicitudCplanComponent implements OnInit {

  planes: PlanPago[] = [
    {cod_plan_pago: 1, nom_plan_pago: 'Mensual'},
    {cod_plan_pago: 2, nom_plan_pago: 'trimestral'},
    {cod_plan_pago: 3, nom_plan_pago: 'Anual'}
  ];

  nombreCliente = 'pedro';
  planPago = 'Anual';
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
