import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavPrincipalComponent} from './nav-principal/nav-principal.component';
import {RegistroDialog} from './nav-principal/nav-principal.component';
import {LoginDialog} from './nav-principal/nav-principal.component';
import {ModalTarjeta} from './ModCliente/perfil-cliente/perfil-cliente.component';

import {RegClienteService} from './service/reg-cliente.service';
import {FormsModule} from '@angular/forms';
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
import {ModalLoginComponent} from './modal-login/modal-login.component';
import {MatDialogModule} from '@angular/material/dialog';
import {PqrClienteComponent} from './ModCliente/pqr-cliente/pqr-cliente.component';
import {EmpleadoTablaComponent} from './empleados/empleado-tabla/empleado-tabla.component';
import {MatTableModule} from '@angular/material/table';
import { EmpleadoSideComponent } from './empleados/empleado-side/empleado-side.component';


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
    EmpleadoTablaComponent,
    EmpleadoSideComponent,
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
    HttpClientModule

  ],
  providers: [RegClienteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
