import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavPrincipalComponent } from "./nav-principal/nav-principal.component";
import {RegistroDialog} from "./nav-principal/nav-principal.component";
import {LoginDialog} from "./nav-principal/nav-principal.component";
import {ModalTarjeta} from "./ModCliente/perfil-cliente/perfil-cliente.component";

import {RegClienteService} from './service/reg-cliente.service';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
/*
* Angular Material
*/
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SideClienteComponent } from './ModCliente/side-cliente/side-cliente.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { PerfilClienteComponent } from './ModCliente/perfil-cliente/perfil-cliente.component';
import {MatInputModule} from '@angular/material/input';
import { InicioClienteComponent } from './ModCliente/inicio-cliente/inicio-cliente.component';
import {MatSelectModule} from '@angular/material/select';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PqrClienteComponent } from './ModCliente/pqr-cliente/pqr-cliente.component';


import { HostClienteComponent } from './ModCliente/host-cliente/host-cliente.component';
import { PqrDistribuidorComponent } from './ModDistribuidor/pqr-distribuidor/pqr-distribuidor.component';
import { HostDistribuidorComponent } from './ModDistribuidor/host-distribuidor/host-distribuidor.component';
import { InicioDistribuidorComponent } from './ModDistribuidor/inicio-distribuidor/inicio-distribuidor.component';
import { PerfilDistribuidorComponent } from './ModDistribuidor/perfil-distribuidor/perfil-distribuidor.component';
import { SideDistribuidorComponent } from './ModDistribuidor/side-distribuidor/side-distribuidor.component';


import { SideAdminComponent } from './ModAdmin/side-admin/side-admin.component';
import { PerfilAdminComponent } from './ModAdmin/perfil-admin/perfil-admin.component';
import { InicioAdminComponent } from './ModAdmin/inicio-admin/inicio-admin.component';
import { EmpleadoAdminComponent } from './ModAdmin/empleado-admin/empleado-admin.component';
import { ListadoEmpleadosAdminComponent } from './ModAdmin/listadoEmpleados-admin/listadoEmpleados-admin.component';
import { ListadoClientesAdminComponent } from './ModAdmin/listadoClientes-admin/listadoClientes-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavPrincipalComponent,
    SideClienteComponent,
    PagInicioComponent,
    PerfilClienteComponent,
    InicioClienteComponent,
    ModalLoginComponent,
    RegistroDialog,
    LoginDialog,
    PqrClienteComponent,
    ModalTarjeta,
    HostClienteComponent,
    SideDistribuidorComponent,
    PerfilDistribuidorComponent,
    InicioDistribuidorComponent,
    HostDistribuidorComponent,
    PqrDistribuidorComponent,
    ListadoClientesAdminComponent,
    ListadoEmpleadosAdminComponent,
    EmpleadoAdminComponent,
    InicioAdminComponent,
    PerfilAdminComponent,
    SideAdminComponent
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
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    MatTableModule
    
  ],
  providers: [RegClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
