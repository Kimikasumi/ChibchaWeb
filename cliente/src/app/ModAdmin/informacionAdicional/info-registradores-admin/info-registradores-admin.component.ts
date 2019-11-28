import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../service/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IRegistradorAdmin} from "../../../models/IRegistrador";

@Component({
  selector: 'app-info-registradores-admin',
  templateUrl: './info-registradores-admin.component.html',
  styleUrls: ['./info-registradores-admin.component.css']
})
export class InfoRegistradoresAdminComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router, private activateRoute: ActivatedRoute) { }
  rGrafico: IRegistradorAdmin = {
    cod_registrador: 0,
    nombre: "",
    correo: "",
    nom_pais: ""

  }

  ngOnInit() {

    if(localStorage.getItem("cedulaAdmin")==null)
    {
      this.router.navigate([''])
    }
    else{
      this.cargarRegistrador();
    }
  }

  cargarRegistrador(){
    const params = this.activateRoute.snapshot.params;
    if(params.cedula){
      this.adminService.obtenerR(localStorage.getItem("cedulaAdmin"), localStorage.getItem("codRegistradorAdmin")).subscribe(
        res => {
          console.log(res);

          this.rGrafico = res;

        },
        err => console.error(err)
      )
    }
    console.log(params);
  }
}
