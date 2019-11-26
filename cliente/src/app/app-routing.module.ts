
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideClienteComponent } from './ModCliente/side-cliente/side-cliente.component';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { PerfilClienteComponent } from './ModCliente/perfil-cliente/perfil-cliente.component';
import { InicioClienteComponent } from './ModCliente/inicio-cliente/inicio-cliente.component';
import { PqrClienteComponent } from './ModCliente/pqr-cliente/pqr-cliente.component';
import { HostDistribuidorComponent } from './ModDistribuidor/host-distribuidor/host-distribuidor.component';
import { SideAdminComponent } from './ModAdmin/side-admin/side-admin.component';
import { PerfilAdminComponent } from './ModAdmin/perfil-admin/perfil-admin.component';
import { InicioAdminComponent } from './ModAdmin/inicio-admin/inicio-admin.component';
import { EmpleadoAdminComponent } from './ModAdmin/empleado-admin/empleado-admin.component';
import { ListadoEmpleadosAdminComponent } from './ModAdmin/listadoEmpleados-admin/listadoEmpleados-admin.component';
// import { ListadoClientesAdminComponent } from './ModAdmin/listadoClientes-admin/listadoClientes-admin.component';
import { HostClienteComponent } from './ModCliente/host-cliente/host-cliente.component';
import { SideDistribuidorComponent } from './ModDistribuidor/side-distribuidor/side-distribuidor.component';
import { PerfilDistribuidorComponent } from './ModDistribuidor/perfil-distribuidor/perfil-distribuidor.component';
import { InicioDistribuidorComponent } from './ModDistribuidor/inicio-distribuidor/inicio-distribuidor.component';
import { PqrDistribuidorComponent } from './ModDistribuidor/pqr-distribuidor/pqr-distribuidor.component';
import { ClienteDistribuidorComponent } from './ModDistribuidor/cliente-distribuidor/cliente-distribuidor.component';

import { ListadoDistribuidoresAdminComponent } from './ModAdmin/listadoDistribuidores-admin/listadoDistribuidores-admin.component';
import { ListadoRegistradoresAdminComponent } from './ModAdmin/listadoRegistradores-admin/listadoRegistradores-admin.component';

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
/*Registrador*/
import {RegistradorSideComponent} from './registrador/registrador-side/registrador-side.component';
import {RegistradorInicioComponent} from './registrador/registrador-inicio/registrador-inicio.component';
import {RegistradorTablaComponent} from './registrador/registrador-tabla/registrador-tabla.component';
import {RegistradorSolicitudComponent} from './registrador/registrador-solicitud/registrador-solicitud.component';

const routes: Routes = [

  {path: '', component: PagInicioComponent},
  {
    path: 'cliente', component: SideClienteComponent, children:
      [
        {path: 'inicio/:cedula', component: InicioClienteComponent},
        {path: 'perfil/:cedula', component: PerfilClienteComponent },
        {path: 'pqr/:cedula', component: PqrClienteComponent},
        {path: 'host/:cedula', component: HostClienteComponent}

      ]
  },
  {
    path: 'distribuidor', component: SideDistribuidorComponent, children:
      [
        {path: 'inicio', component: InicioDistribuidorComponent},
        {path: 'perfil', component: PerfilDistribuidorComponent},
        {path: 'pqr', component: PqrDistribuidorComponent},
        {path: 'host', component: HostDistribuidorComponent},
        {path: 'nCliente', component: ClienteDistribuidorComponent}

      ]
    },
    {path: 'admin', component: SideAdminComponent, children:
    [
      {path: 'inicio', component: InicioAdminComponent},
      {path: 'perfil', component: PerfilAdminComponent },
      {path: 'nempleados', component: EmpleadoAdminComponent},
      {path: 'lempleados', component: ListadoEmpleadosAdminComponent},
      {path: 'ldistribuidores', component: ListadoDistribuidoresAdminComponent},
      {path: 'lregistradores', component: ListadoRegistradoresAdminComponent},


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
  },
  {
    path: 'registrador', component: RegistradorSideComponent, children:
    [
      {path: 'inicio/:cod_registrador', component: RegistradorInicioComponent},
      {path: 'tabla/:cod_registrador', component: RegistradorTablaComponent},
      {path: 'solicitud/:cod_registrador/:cod_ticket', component: RegistradorSolicitudComponent}
    ]
  },
  {path: '**', component: PagInicioComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
