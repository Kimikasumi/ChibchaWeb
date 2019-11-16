import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideClienteComponent } from './ModCliente/side-cliente/side-cliente.component';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { PerfilClienteComponent } from './ModCliente/perfil-cliente/perfil-cliente.component';
import { InicioClienteComponent } from './ModCliente/inicio-cliente/inicio-cliente.component';
import { PqrClienteComponent } from './ModCliente/pqr-cliente/pqr-cliente.component';

/*Empleado*/
import { EmpleadoNHostComponent } from './empleado_tecnico/empleado-n-host/empleado-n-host.component';

const routes: Routes = [
    {path: '', component: PagInicioComponent },
    {path: 'cliente', component: SideClienteComponent, children:
      [
        {path: 'inicio', component: InicioClienteComponent},
        {path: 'perfil', component: PerfilClienteComponent },
        {path: 'pqr', component: PqrClienteComponent}
      ]},
  { path: 'empleado', component: EmpleadoNHostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
