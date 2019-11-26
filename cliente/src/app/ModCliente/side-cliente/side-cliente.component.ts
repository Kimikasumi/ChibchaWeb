import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import {ICliente} from '../../models/ICliente';
import {InicioClienteComponent} from '../../ModCliente/inicio-cliente/inicio-cliente.component';

@Component({
  selector: 'app-side-cliente',
  templateUrl: './side-cliente.component.html',
  styleUrls: ['./side-cliente.component.css']
})
export class SideClienteComponent {

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  mobileQuery: MediaQueryList;

  //fillerNav = Array(5).fill(0).map((_, i) => `Nav Item ${i + 1}`);
  fillerNav=[
    {name:"Inicio", route:"inicio/"+localStorage.getItem("cedulaCliente"), icon: "home"},
    {name:"Perfil", route:"perfil/"+localStorage.getItem("cedulaCliente"), icon:"account_circle"},
    {name:"PQR", route:"pqr/"+localStorage.getItem("cedulaCliente"), icon:"build"},
    {name:"Solicitar Dominio", route:"host/"+localStorage.getItem("cedulaCliente"), icon:"add_to_queue"},
    {name:"Cerrar Sesión", route:"", icon:"perm_identity"}
  ]

  fillerContent = Array(2).fill(0).map(() =>
      `Open side nav, and click on any navigation to close the opened side nav.`);

  private _mobileQueryListener: () => void;

 

  shouldRun = true;
}
