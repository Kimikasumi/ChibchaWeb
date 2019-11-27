import { Component, OnInit } from '@angular/core';
import { IRegistrarCliente } from '../models/IRegistrarCliente';
import { RegClienteService } from '../service/reg-cliente.service';
import {UsuarioService} from '../service/usuario.service';
import { ISesionUsuario } from '../models/ISesionUsuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-principal',
  templateUrl: './nav-principal.component.html',
  styleUrls: ['./nav-principal.component.css']
})

export class NavPrincipalComponent {
  constructor() { }


  ngOnInit() {
  }


}


@Component({
  selector: 'registro-dialog',
  templateUrl: 'registro-dialog.component.html',
})
export class RegistroDialog implements OnInit{

  cliente: IRegistrarCliente={
    cedula: 0,
    correo: "",
    nombre: "",
    contrasenia: "",
    cod_t_usuario: 2
    };

  constructor(private regClienteService: RegClienteService) {

  }

  ngOnInit() {
  }

  nuevaPersona(){
    console.log(this.cliente)
    let clien: IRegistrarCliente={
      cedula:this.cliente.cedula,
      correo:this.cliente.correo,
      nombre:this.cliente.nombre,
      contrasenia:this.cliente.contrasenia,
      cod_t_usuario:this.cliente.cod_t_usuario
    }

    console.log(this.cliente)
    this.regClienteService.saveCliente(clien).
    subscribe(
      res=>{
        console.log(res);
      },
      err => console.error(err)

    )
  }
}


/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'login-dialog',
  templateUrl: './login-dialog.component.html',
})
export class LoginDialog implements OnInit{

  constructor(private usuarioService:UsuarioService, private router: Router){

    this.nuevaSesion();
  }

  usuario: ISesionUsuario={
    correo:"",
    contrasenia:""
  };

  sesionCreada: any = [];

  ngOnInit(){
  }

  nuevaSesion(){

    let usuar: ISesionUsuario={
      correo:this.usuario.correo,
      contrasenia:this.usuario.contrasenia,
    }

    this.usuarioService.identificarUsuario(usuar).subscribe(
      res => {

        this.sesionCreada = res;
        if (this.sesionCreada.cod_t_usuario == 1){
          let cedula:string = this.sesionCreada.cedula;
          localStorage.setItem("cedulaAdmin", cedula);
          this.router.navigate(['admin/inicio']);

        }
        else if (this.sesionCreada.cod_t_usuario == 2){

          let cedula:string = this.sesionCreada.cedula;

          localStorage.setItem("cedulaCliente", cedula);
          this.router.navigate(['cliente/inicio/'+cedula]);
        }

        /*Registrador*/
        else if (this.sesionCreada.cod_t_usuario == 3){
          let codRegistrador: string = this.sesionCreada.cod_registrador;
          localStorage.setItem('codRegistrador', codRegistrador);
          this.router.navigate(['registrador/inicio/' + codRegistrador]);
        }

        /*Empleado*/
        else if (this.sesionCreada.cod_t_usuario == 4) {
          const cedula: string = this.sesionCreada.cedula;
          const nombreEmpleado: string = this.sesionCreada.nombre;
          const tEmpleado: string = this.sesionCreada.cod_t_empleado;
          localStorage.setItem('cedula', cedula);
          localStorage.setItem('nombre', nombreEmpleado);
          localStorage.setItem('tEmpleado', tEmpleado);
          this.router.navigate(['empleado/inicio/' + cedula]);
        }
        else if (this.sesionCreada.cod_t_usuario == 5){
          let cedula:string = this.sesionCreada.cedula;

          localStorage.setItem("cedulaDistribuidor", cedula);
          this.router.navigate(['distribuidor/inicio/'+cedula]);
        }

        console.log(res);
      },
      err => console.error(err)
    )

  }
}

