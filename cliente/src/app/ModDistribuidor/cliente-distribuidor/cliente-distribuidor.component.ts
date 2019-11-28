import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DistribuidorService } from '../../service/distribuidor.service'
import { IClienteReg } from '../../models/ICliente';
@Component({
  selector: 'app-cliente-distribuidor',
  templateUrl: './cliente-distribuidor.component.html',
  styleUrls: ['./cliente-distribuidor.component.css']
})
export class ClienteDistribuidorComponent implements OnInit {

  constructor(private router:Router, private distribuidorService: DistribuidorService) { }

  cliente: IClienteReg={
    cedula: 0,
    cod_p_pago: 0,
    cod_paquete: 0,
    correo: "",
    contrasenia:"",
    nombre: ""
}
  
  ngOnInit() {
    if(localStorage.getItem("cedulaDistribuidor")==null)
    {
      this.router.navigate([''])
    }
  }

  crearUsuario(){
    let cedula= parseInt(localStorage.getItem('cedulaDistribuidor'))
    this.distribuidorService.crearCliente(cedula,this.cliente).subscribe(
      res => {
        console.log('Cliente creado')
      },
      err => console.error(err)

    )
  }

}
