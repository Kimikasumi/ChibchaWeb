import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

/**
 * @title Bottom Sheet Overview
 */
@Component({
  selector: 'perfil-distribuidor.component',
  templateUrl: 'perfil-distribuidor.component.html',
  styleUrls: ['perfil-distribuidor.component.css'],
})
export class BottomSheetOverviewExample {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

}

@Component({
  selector: 'perfil-distribuidor.component',
  templateUrl: 'boton.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-perfil-distribuidor',
  templateUrl: './perfil-distribuidor.component.html',
  styleUrls: ['./perfil-distribuidor.component.css']
})
export class PerfilDistribuidorComponent implements OnInit {

  foods: Food[] = [
    {value: '0', viewValue: 'Credito'},
    {value: '1', viewValue: 'Transacciones'},
  ];

  constructor(private router:Router) { }


  
  ngOnInit() {
    if(localStorage.getItem("cedulaCliente")==null)
    {
      this.router.navigate([''])
    }
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
