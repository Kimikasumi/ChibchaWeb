import { Component, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-side-distribuidor',
  templateUrl: './side-distribuidor.component.html',
  styleUrls: ['./side-distribuidor.component.css']
})
export class SideDistribuidorComponent {
  mobileQuery: MediaQueryList;

  //fillerNav = Array(5).fill(0).map((_, i) => `Nav Item ${i + 1}`);
  fillerNav=[
    {name:"inicio", route:"inicio/"+localStorage.getItem('cedulaDistribuidor'), icon: "home"},
    {name:"perfil", route:"perfil/"+localStorage.getItem('cedulaDistribuidor'), icon:"account_circle"},
    {name:"PQR", route:"pqr/"+localStorage.getItem('cedulaDistribuidor'), icon:"build"},
    {name:"Nuevo Dominio", route:"host/"+localStorage.getItem('cedulaDistribuidor'), icon:"add_to_queue"},
    {name:"Nuevo Cliente", route:"nCliente/"+localStorage.getItem('cedulaDistribuidor'), icon:"person_add"},
    {name:"Cerrar Sesión", route:"", icon:"perm_identity"}
  ]

  fillerContent = Array(2).fill(0).map(() =>
      `Open side nav, and click on any navigation to close the opened side nav.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;
}
