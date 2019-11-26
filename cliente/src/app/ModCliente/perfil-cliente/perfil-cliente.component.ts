import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../service/cliente.service'
import { Router, ActivatedRoute } from '@angular/router';
import {ICliente} from '../../models/ICliente';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {

  foods: Food[] = [
    {value: '0', viewValue: 'Credito'},
    {value: '1', viewValue: 'Transacciones'},
  ];

  constructor(private clienteService: ClienteService, private router: Router, private activateRoute: ActivatedRoute) { }
  

  clienteGrafico: ICliente = {
    cedula: 0,
    numero: "",
    plan_pago: "",
    paquete: "",
    correo: "",
    nombre: "",
    fecha_tarjeta: null,
    nom_t_tarjeta: "SELECCIONA",
    cod_seguridad: 0
    
  }
  mostrarSelect:boolean = false;

  ngOnInit() {
    if(localStorage.getItem("cedulaCliente")==null)
    {
      this.router.navigate([''])
    }
    else{
      this.cargarPerfil();
    }
  }

  cargarPerfil(){
    const params = this.activateRoute.snapshot.params;
    if(params.cedula){
      this.clienteService.cargarPerfilCliente(params.cedula).subscribe(
        res => {
          console.log(res);
          this.mostrarSelect = true;
          this.clienteGrafico = res;
        },
        
        err => console.error(err)
        
      )
    }
    console.log(params);
  }

}

@Component({
  selector: 'modal-tarjeta',
  templateUrl: 'modal-tarjeta.component.html',
})
export class ModalTarjeta implements OnInit {

  constructor(private clienteService: ClienteService, private router: Router, private activateRoute: ActivatedRoute) { }
  

  clienteGrafico: ICliente = {
    cedula: 0,
    numero: "",
    plan_pago: "",
    paquete: "",
    correo: "",
    nombre: "",
    fecha_tarjeta: null,
    cod_seguridad: 0
    
  }

  ngOnInit() {
    this.cargarPerfil();
  }

  mostrarSelect:boolean = false;
  cargarPerfil(){
    const params = this.activateRoute.snapshot.params;
    if(params.cedula){
      this.clienteService.cargarPerfilCliente(params.cedula).subscribe(
        res => {
          console.log(res);
          this.mostrarSelect = true;
          this.clienteGrafico = res;
        },
        err => console.error(err)
      )
    }
    console.log(params);
  }
}
