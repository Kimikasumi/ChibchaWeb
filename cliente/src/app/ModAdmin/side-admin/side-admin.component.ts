import { Component, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-side-admin',
  templateUrl: './side-admin.component.html',
  styleUrls: ['./side-admin.component.css']
})
export class SideAdminComponent {
  mobileQuery: MediaQueryList;

  //fillerNav = Array(5).fill(0).map((_, i) => `Nav Item ${i + 1}`);
  fillerNav=[
    {name:"Inicio", route:"inicio/"+localStorage.getItem("cedulaAdmin"), icon: "home"},
    {name:"Perfil", route:"perfil/"+localStorage.getItem("cedulaAdmin"), icon:"account_circle"},
    {name:"Nuevo Empleado", route:"nempleados/"+localStorage.getItem("cedulaAdmin"), icon:"person_add"},
    {name:"Nuevo Distribuidor", route:"ndistribuidores/"+localStorage.getItem("cedulaAdmin"), icon:"person_add"},
    {name:"Nuevo Registrador", route:"nregistradores/"+localStorage.getItem("cedulaAdmin"), icon:"person_add"},
    {name:"Listado Empleados", route:"lempleados/"+localStorage.getItem("cedulaAdmin"), icon:"headset_mic"},
    {name:"Listado Distribuidores", route:"ldistribuidores/"+localStorage.getItem("cedulaAdmin"), icon:"how_to_reg"},
    {name:"Listado Registradores", route:"lregistradores/"+localStorage.getItem("cedulaAdmin"), icon:"group"},
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
