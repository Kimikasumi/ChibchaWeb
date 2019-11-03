import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavPrincipalComponent } from './nav-principal/nav-principal.component';
import { SidebarClienteComponent } from './ModCliente/sidebar-cliente/sidebar-cliente.component';
/*
* Angular Material
*/
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    NavPrincipalComponent,
    SidebarClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
