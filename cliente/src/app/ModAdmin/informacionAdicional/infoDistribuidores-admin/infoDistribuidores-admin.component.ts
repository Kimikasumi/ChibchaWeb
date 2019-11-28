import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IDistribuidorAdmin} from "../../../models/IDistribuidor";
import {AdminService} from "../../../service/admin.service";


@Component({
  selector: 'infoDistribuidores-admin.component',
  templateUrl: './infoDistribuidores-admin.component.html',
  styleUrls: ['./infoDistribuidores-admin.component.css']
})
export class InfoDistribuidoresAdminComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router, private activateRoute: ActivatedRoute) { }
  dGrafico: IDistribuidorAdmin = {
    cedula: 0,
    nombre: "",
    correo: "",
    nom_t_distribuidor: ""

  }
  ngOnInit() {

    if(localStorage.getItem("cedulaAdmin")==null)
    {
      this.router.navigate([''])
    }
    else{
      this.cargarDistribuidor();
    }
  }

  cargarDistribuidor(){
    const params = this.activateRoute.snapshot.params;
    if(params.cedula){
      this.adminService.obtenerD(localStorage.getItem("cedulaAdmin"), localStorage.getItem("codDistribuidorAdmin")).subscribe(
        res => {
          console.log(res);

          this.dGrafico = res;

        },
        err => console.error(err)
      )
    }
    console.log(params);
  }
}


