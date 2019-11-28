import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from "../../../service/admin.service";
import {IempleadoAdmin} from "../../../models/IEmpleado";


@Component({
  selector: 'infoEmpleado-admin.component',
  templateUrl: './infoEmpleado-admin.component.html',
  styleUrls: ['./infoEmpleado-admin.component.css']
})
export class InfoEmpleadoAdminComponent implements OnInit {

  empleadoGrafico: IempleadoAdmin = {
    cedula: 0,
    nombre: "",
    correo: "",
    nom_t_empleado: ""

  }

  constructor(private adminService: AdminService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    if(localStorage.getItem("cedulaAdmin")==null)
    {
      this.router.navigate([''])
    }
    else{
      this.cargarEmpleado();
    }
  }

  cargarEmpleado(){
    const params = this.activateRoute.snapshot.params;
    if(params.cedula){
      this.adminService.obtenerEmpleado(localStorage.getItem("cedulaAdmin"),localStorage.getItem("codEmpleadoAdmin") ).subscribe(
        res => {
          console.log(res);
          this.empleadoGrafico = res;
        },

        err => console.error(err)

      )
    }
    console.log(params);
  }


}


