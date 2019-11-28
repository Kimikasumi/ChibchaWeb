import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service'
import { Router, ActivatedRoute } from '@angular/router';
import {IAdmin} from '../../models/IAdmin';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-perfil-admin',
  templateUrl: './perfil-admin.component.html',
  styleUrls: ['./perfil-admin.component.css']
})

export class PerfilAdminComponent implements OnInit {

  foods: Food[] = [
    {value: '0', viewValue: 'Credito'},
    {value: '1', viewValue: 'Transacciones'},
  ];

  constructor(private adminService: AdminService, private router: Router, private activateRoute: ActivatedRoute) { }


  adminGrafico: IAdmin = {
    correo: "",
    nombre: "",

  }
  mostrarSelect:boolean = false;

  ngOnInit() {
    if(localStorage.getItem("cedulaAdmin")==null)
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
      this.adminService.cargarPerfilAdmin(params.cedula).subscribe(
        res => {
          console.log(res);
          this.mostrarSelect = true;
          this.adminGrafico = res;
        },

        err => console.error(err)

      )
    }
    console.log(params);
  }

}

