import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SideClienteComponent} from './ModCliente/side-cliente/side-cliente.component';
import {PagInicioComponent} from './pag-inicio/pag-inicio.component';
import {PerfilClienteComponent} from './ModCliente/perfil-cliente/perfil-cliente.component';
import {InicioClienteComponent} from './ModCliente/inicio-cliente/inicio-cliente.component';
import {PqrClienteComponent} from './ModCliente/pqr-cliente/pqr-cliente.component';

/*Empleado*/
import {EmpleadoTablaComponent} from './empleados/empleado-tabla/empleado-tabla.component';
import {EmpleadoSideComponent} from './empleados/empleado-side/empleado-side.component';

const routes: Routes = [
  {path: '', component: PagInicioComponent},
  {
    path: 'cliente', component: SideClienteComponent, children:
      [
        {path: 'inicio', component: InicioClienteComponent},
        {path: 'perfil', component: PerfilClienteComponent},
        {path: 'pqr', component: PqrClienteComponent}
      ]
  },
  {
    path: 'empleado', component: EmpleadoSideComponent, children:
      [
        {path: 'solicitudes', component: EmpleadoTablaComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
