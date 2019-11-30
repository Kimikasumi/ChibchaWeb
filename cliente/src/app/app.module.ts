import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavPrincipalComponent} from './nav-principal/nav-principal.component';
import {RegistroDialog} from './nav-principal/nav-principal.component';
import {LoginDialog} from './nav-principal/nav-principal.component';
import {ModalTarjeta} from './ModCliente/perfil-cliente/perfil-cliente.component';

import {RegClienteService} from './service/reg-cliente.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
/*
* Angular Material
*/
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {SideClienteComponent} from './ModCliente/side-cliente/side-cliente.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PagInicioComponent} from './pag-inicio/pag-inicio.component';
import {PerfilClienteComponent} from './ModCliente/perfil-cliente/perfil-cliente.component';
import {MatInputModule} from '@angular/material/input';
import {InicioClienteComponent} from './ModCliente/inicio-cliente/inicio-cliente.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {PqrClienteComponent} from './ModCliente/pqr-cliente/pqr-cliente.component';
import {MatTableModule} from '@angular/material/table';
/*Empleados*/
import { EmpleadoSideComponent } from './empleados/empleado-side/empleado-side.component';
import {EmpleadoTablaComponent} from './empleados/empleado-tabla/empleado-tabla.component';
/*Solicitudes*/
import { SolicitudChostComponent } from './empleados/solicitudes/solicitud-chost/solicitud-chost.component';
import { SolicitudNDomComponent } from './empleados/solicitudes/solicitud-n-dom/solicitud-n-dom.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SolicitudCplanComponent } from './empleados/solicitudes/solicitud-cplan/solicitud-cplan.component';
import { SolicitudCpaqueteComponent } from './empleados/solicitudes/solicitud-cpaquete/solicitud-cpaquete.component';
import { EmpleadoPqrComponent } from './empleados/solicitudes/empleado-pqr/empleado-pqr.component';
import { InicioEmpleadoComponent } from './empleados/inicio-empleado/inicio-empleado.component';


import { HostClienteComponent } from './ModCliente/host-cliente/host-cliente.component';
import { HostDistribuidorComponent } from './ModDistribuidor/host-distribuidor/host-distribuidor.component';
import { PqrDistribuidorComponent } from './ModDistribuidor/pqr-distribuidor/pqr-distribuidor.component';
import { InicioDistribuidorComponent } from './ModDistribuidor/inicio-distribuidor/inicio-distribuidor.component';
import { SideDistribuidorComponent } from './ModDistribuidor/side-distribuidor/side-distribuidor.component';
import { PerfilDistribuidorComponent } from './ModDistribuidor/perfil-distribuidor/perfil-distribuidor.component';


import { SideAdminComponent } from './ModAdmin/side-admin/side-admin.component';
import { PerfilAdminComponent } from './ModAdmin/perfil-admin/perfil-admin.component';
import { InicioAdminComponent } from './ModAdmin/inicio-admin/inicio-admin.component';
import { EmpleadoAdminComponent } from './ModAdmin/empleado-admin/empleado-admin.component';
import { ListadoEmpleadosAdminComponent } from './ModAdmin/listadoEmpleados-admin/listadoEmpleados-admin.component';
// import { ListadoClientesAdminComponent } from './ModAdmin/listadoClientes-admin/listadoClientes-admin.component';
import { ClienteDistribuidorComponent } from './ModDistribuidor/cliente-distribuidor/cliente-distribuidor.component';
import { ListadoDistribuidoresAdminComponent } from './ModAdmin/listadoDistribuidores-admin/listadoDistribuidores-admin.component';
import { ListadoRegistradoresAdminComponent } from './ModAdmin/listadoRegistradores-admin/listadoRegistradores-admin.component';
import { RegistradorSideComponent } from './registrador/registrador-side/registrador-side.component';
import { RegistradorInicioComponent } from './registrador/registrador-inicio/registrador-inicio.component';
import { RegistradorTablaComponent } from './registrador/registrador-tabla/registrador-tabla.component';
import { RegistradorSolicitudComponent } from './registrador/registrador-solicitud/registrador-solicitud.component';

import { InfoEmpleadoAdminComponent } from './ModAdmin/informacionAdicional/infoEmpleados-admin/infoEmpleado-admin.component';
// tslint:disable-next-line:max-line-length
import { InfoDistribuidoresAdminComponent } from './ModAdmin/informacionAdicional/infoDistribuidores-admin/infoDistribuidores-admin.component';
import { InfoRegistradoresAdminComponent } from './ModAdmin/informacionAdicional/info-registradores-admin/info-registradores-admin.component';
import { DistribuidorAdminComponent } from './ModAdmin/distribuidor-admin/distribuidor-admin.component';
import { RegistradorAdminComponent } from './ModAdmin/registrador-admin/registrador-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavPrincipalComponent,
    SideClienteComponent,
    PagInicioComponent,
    PerfilClienteComponent,
    InicioClienteComponent,
    RegistroDialog,
    LoginDialog,
    PqrClienteComponent,
    ModalTarjeta,
    EmpleadoTablaComponent,
    EmpleadoSideComponent,
    SolicitudChostComponent,
    SolicitudNDomComponent,
    SolicitudCplanComponent,
    SolicitudCpaqueteComponent,
    EmpleadoPqrComponent,
    InicioEmpleadoComponent,
    HostClienteComponent,
    SideDistribuidorComponent,
    PerfilDistribuidorComponent,
    InicioDistribuidorComponent,
    HostDistribuidorComponent,
    PqrDistribuidorComponent,
    // ListadoClientesAdminComponent,
    ListadoEmpleadosAdminComponent,
    EmpleadoAdminComponent,
    InicioAdminComponent,
    PerfilAdminComponent,
    SideAdminComponent,
    EmpleadoTablaComponent,
    ClienteDistribuidorComponent,
    ListadoDistribuidoresAdminComponent,
    ListadoRegistradoresAdminComponent,
    RegistradorSideComponent,
    RegistradorInicioComponent,
    RegistradorTablaComponent,
    RegistradorSolicitudComponent,
    InfoEmpleadoAdminComponent,
    InfoDistribuidoresAdminComponent,
    InfoRegistradoresAdminComponent,
    DistribuidorAdminComponent,
    RegistradorAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [RegClienteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
