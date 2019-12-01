
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
import { InfoEmpleadoAdminComponent } from './ModAdmin/informacionAdicional/infoEmpleados-admin/infoEmpleado-admin.component';

// tslint:disable-next-line:max-line-length
import { InfoDistribuidoresAdminComponent } from './ModAdmin/informacionAdicional/infoDistribuidores-admin/infoDistribuidores-admin.component';
// tslint:disable-next-line:max-line-length
import { InfoRegistradoresAdminComponent } from './ModAdmin/informacionAdicional/info-registradores-admin/info-registradores-admin.component';
import { DistribuidorAdminComponent } from './ModAdmin/distribuidor-admin/distribuidor-admin.component';
import { RegistradorAdminComponent } from './ModAdmin/registrador-admin/registrador-admin.component';

/*Empleado*/
import {EmpleadoTablaComponent} from './empleados/empleado-tabla/empleado-tabla.component';
import {EmpleadoSideComponent} from './empleados/empleado-side/empleado-side.component';
import {InicioEmpleadoComponent} from './empleados/inicio-empleado/inicio-empleado.component';
/*Solicitudes*/
import {SolicitudNDomComponent} from './empleados/solicitudes/solicitud-n-dom/solicitud-n-dom.component';
import {SolicitudChostComponent} from './empleados/solicitudes/solicitud-chost/solicitud-chost.component';
import {SolicitudCplanComponent} from './empleados/solicitudes/solicitud-cplan/solicitud-cplan.component';
import {SolicitudCpaqueteComponent} from './empleados/solicitudes/solicitud-cpaquete/solicitud-cpaquete.component';

import {EmpleadoPqrComponent} from './empleados/solicitudes2/empleado-pqr/empleado-pqr.component';
import {EmpleadoErroresComponent} from './empleados/solicitudes2/empleado-errores/empleado-errores.component';
import {EmpleadoTramiteDomComponent} from './empleados/solicitudes2/empleado-tramite-dom/empleado-tramite-dom.component';
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
        {path: 'inicio/:cedula', component: InicioDistribuidorComponent},
        {path: 'perfil/:cedula', component: PerfilDistribuidorComponent},
        {path: 'pqr/:cedula', component: PqrDistribuidorComponent},
        {path: 'host/:cedula', component: HostDistribuidorComponent},
        {path: 'nCliente/:cedula', component: ClienteDistribuidorComponent}

      ]
    },
    {path: 'admin', component: SideAdminComponent, children:
    [
      {path: 'inicio/:cedula', component: InicioAdminComponent},
      {path: 'perfil/:cedula', component: PerfilAdminComponent },
      {path: 'ndistribuidores/:cedula', component: DistribuidorAdminComponent},
      {path: 'nempleados/:cedula', component: EmpleadoAdminComponent},
      {path: 'nregistradores/:cedula', component: RegistradorAdminComponent},
      {path: 'lempleados/:cedula', component: ListadoEmpleadosAdminComponent},
      {path: 'ldistribuidores/:cedula', component: ListadoDistribuidoresAdminComponent},
      {path: 'lregistradores/:cedula', component: ListadoRegistradoresAdminComponent},
      {path: 'infoEmpleado/:cedula/:cedulaEmpleado', component: InfoEmpleadoAdminComponent},
      {path: 'infoRegistrador/:cedula/:cedulaRegistrador', component: InfoRegistradoresAdminComponent},
      {path: 'infoDistribuidor/:cedula/:cedulaDistribuidor', component: InfoDistribuidoresAdminComponent}


    ]
  },
  {
    path: 'empleado', component: EmpleadoSideComponent, children:
      [
        {path: 'solicitudes/:cedula', component: EmpleadoTablaComponent},
        {path: 'inicio/:cedula', component: InicioEmpleadoComponent},
        /*Solicitudes*/
        {path: 'pqr/:cedula/:cod_ticket', component: EmpleadoPqrComponent},
        {path: 'err/:cedula/:cod_ticket', component: EmpleadoErroresComponent},
        {path: 'dom/:cedula/:cod_ticket', component: EmpleadoTramiteDomComponent},

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
