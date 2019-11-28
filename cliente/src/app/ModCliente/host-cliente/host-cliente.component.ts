import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { IDominio } from '../../models/IDominio';
import {ICliente} from '../../models/ICliente';
@Component({
  selector: 'app-host-cliente',
  templateUrl: './host-cliente.component.html',
  styleUrls: ['./host-cliente.component.css']
})
export class HostClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    if(localStorage.getItem("cedulaCliente")==null)
    {
      this.router.navigate([''])
    }
  }

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

  dominioGrafico:IDominio={
    cod_dominio:0,
    nom_dominio:"",
    cedula:0,
    nombre:"",
    descripcion:""
  }




crearDominio(){
  const params = this.activateRoute.snapshot.params;
  this.clienteService.cargarPerfilCliente(params.cedula).subscribe(
    res => {
      this.clienteGrafico = res;
      console.log(this.clienteGrafico)
      this.dominioGrafico.cedula=this.clienteGrafico.cedula
      this.dominioGrafico.nombre=this.clienteGrafico.nombre
      console.log(this.dominioGrafico)
      this.clienteService.crearDominio(params.cedula, this.dominioGrafico).subscribe(
        res => {
          console.log("Dominio creado")
        },
        err=>console.error(err)
      )
    },
    err => console.error(err)
  )
}

}
