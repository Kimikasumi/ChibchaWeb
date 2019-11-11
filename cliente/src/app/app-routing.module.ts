import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideClienteComponent } from './ModCliente/side-cliente/side-cliente.component';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { PerfilClienteComponent } from './ModCliente/perfil-cliente/perfil-cliente.component';
import { InicioClienteComponent } from './ModCliente/inicio-cliente/inicio-cliente.component';

const routes: Routes = [
    {path: '', component: PagInicioComponent },
    {path: 'cliente', component: SideClienteComponent, children:
      [
        {path: 'inicio', component: InicioClienteComponent},
        {path: 'perfil', component: PerfilClienteComponent }
      ] 
    },
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
