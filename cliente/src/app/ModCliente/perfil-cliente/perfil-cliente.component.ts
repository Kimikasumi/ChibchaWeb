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
    fecha_vencimiento: null,
    nom_t_tarjeta: "",
    cod_seguridad: 0
    
  }

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
          this.clienteGrafico = res;
        },
        err => console.error(err)
      )
    }
    this.cargarDominiosCliente();
  }

  clienteDominiosG: any = [];

  cargarDominiosCliente(){
    const params = this.activateRoute.snapshot.params;
    if(params.cedula){
      this.clienteService.cargarDominio(params.cedula).subscribe(
        res => {
          console.log(res);
          this.clienteDominiosG = res;
          console.log(this.clienteDominiosG);
        },
        err => console.error(err)
      )
    }
    
    console.log("AAAAAAAAA");
  }


  guardarInfoCliente(){
    this.clienteService.editarCliente(this.clienteGrafico).
    subscribe(
      res=>{
        console.log(res);
        console.log(this.clienteGrafico);
      },
      err => console.error(err)
      
    )
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
    fecha_vencimiento: null,
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
          
          this.clienteGrafico = res;
          if(this.clienteGrafico.numero!="0")
          {
            this.mostrarSelect = true;
          }
        },
        err => console.error(err)
      )
    }
    console.log(params);
  }


  guardarTarjetaCredito(){
    this.clienteService.crearTarjeta(this.clienteGrafico).
    subscribe(
      res=>{
        console.log(res);
        console.log(this.clienteGrafico);
      },
      err => console.error(err)
      
    )
  }

  
}
