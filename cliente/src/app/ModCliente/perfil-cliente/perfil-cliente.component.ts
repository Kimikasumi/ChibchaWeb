import { Component, OnInit } from '@angular/core';


export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {

  foods: Food[] = [
    {value: '0', viewValue: 'Credito'},
    {value: '1', viewValue: 'Transacciones'},
  ];

  constructor() { }
  

  ngOnInit() {
  }

}

@Component({
  selector: 'modal-tarjeta',
  templateUrl: 'modal-tarjeta.component.html',
})
export class ModalTarjeta {

  constructor() {

  }
}
