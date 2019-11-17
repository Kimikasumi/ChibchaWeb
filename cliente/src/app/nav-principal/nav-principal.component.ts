import { Component, OnInit } from '@angular/core';
import { IRegistrarCliente } from '../models/IRegistrarCliente';
import { RegClienteService } from '../service/reg-cliente.service';


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
export class LoginDialog {
  
}

