import { Component, OnInit } from '@angular/core';
import {IDistribuidor} from "../../models/IDistribuidor";
import {AdminService} from "../../service/admin.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-distribuidor-admin',
  templateUrl: './distribuidor-admin.component.html',
  styleUrls: ['./distribuidor-admin.component.css']
})
export class DistribuidorAdminComponent implements OnInit {

  constructor(private router:Router, private adminService: AdminService) { }

  ngOnInit() {
  }


  distribuidorGrafico:IDistribuidor={
    cedula:0,
    nombre:"",
    correo:"",
    contrasenia:"",
    cod_t_distribuidor:0,
    nom_t_distribuidor:"",
    val_comision:0
}

nuevoDistribuidor(){

  console.log(this.distribuidorGrafico)
  this.adminService.crearDistribuidor(this.distribuidorGrafico).subscribe(
    res=>{
      console.log(res);
      alert("Distribuidor Registrado")
    },
    err => console.error(err)

  )
}

}
