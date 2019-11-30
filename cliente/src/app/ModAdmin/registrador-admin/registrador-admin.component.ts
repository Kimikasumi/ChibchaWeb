import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin.service";
import { Router } from '@angular/router';
import { IRegistrador } from '../../models/IRegistrador';

@Component({
  selector: 'app-registrador-admin',
  templateUrl: './registrador-admin.component.html',
  styleUrls: ['./registrador-admin.component.css']
})
export class RegistradorAdminComponent implements OnInit {

  constructor(private router:Router, private adminService: AdminService) { }

  ngOnInit() {
    this.cargarSelPaises();
  }

  selPaises:any=[]

  registradorGrafico:IRegistrador ={
    cod_registrador:0,
    nombre:"",
    correo:"",
    contrasenia:"",
    cod_pais:0,
}

  cargarSelPaises(){
    this.adminService.selPais().subscribe(
      res=>{
        this.selPaises=res
      },
      err => console.error(err)
    );
  }

  nuevoRegistrador(){
    this.adminService.crearRegistrador(this.registradorGrafico).subscribe(
      res=>{
        alert('Registrador Creado')
      },
      err => console.error(err)
    );
  }
}
