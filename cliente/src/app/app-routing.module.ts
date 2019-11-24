import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SideClienteComponent} from './ModCliente/side-cliente/side-cliente.component';
import {PagInicioComponent} from './pag-inicio/pag-inicio.component';
import {PerfilClienteComponent} from './ModCliente/perfil-cliente/perfil-cliente.component';
import {InicioClienteComponent} from './ModCliente/inicio-cliente/inicio-cliente.component';
import {PqrClienteComponent} from './ModCliente/pqr-cliente/pqr-cliente.component';

/*Empleado*/
import {EmpleadoTablaComponent, Solicitud} from './empleados/empleado-tabla/empleado-tabla.component';
import {EmpleadoSideComponent} from './empleados/empleado-side/empleado-side.component';
import {InicioEmpleadoComponent} from './empleados/inicio-empleado/inicio-empleado.component';
/*Solicitudes*/
import {SolicitudNDomComponent} from './empleados/solicitudes/solicitud-n-dom/solicitud-n-dom.component';
import {SolicitudChostComponent} from './empleados/solicitudes/solicitud-chost/solicitud-chost.component';
import {SolicitudCplanComponent} from './empleados/solicitudes/solicitud-cplan/solicitud-cplan.component';
import {SolicitudCpaqueteComponent} from './empleados/solicitudes/solicitud-cpaquete/solicitud-cpaquete.component';
import {EmpleadoPqrComponent} from './empleados/solicitudes/empleado-pqr/empleado-pqr.component';

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
        {path: 'solicitudes', component: EmpleadoTablaComponent},
        {path: 'inicio', component: InicioEmpleadoComponent},
        /*Solicitudes*/
        {path: 'ndom', component: SolicitudNDomComponent},
        {path: 'chost', component: SolicitudChostComponent},
        {path: 'cplan', component: SolicitudCplanComponent},
        {path: 'cpaquete', component: SolicitudCpaqueteComponent},
        {path: 'pqr', component: EmpleadoPqrComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
