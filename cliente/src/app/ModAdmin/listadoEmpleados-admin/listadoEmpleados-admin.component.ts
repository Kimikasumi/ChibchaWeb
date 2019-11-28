import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from "../../service/admin.service";


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-listadoEmpleados-admin',
  templateUrl: './listadoEmpleados-admin.component.html',
  styleUrls: ['./listadoEmpleados-admin.component.css']
})
export class ListadoEmpleadosAdminComponent  implements OnInit {


  listadoEmpleadosG: any = [];


  constructor(private adminService: AdminService, private router: Router, private activateRoute: ActivatedRoute) { }

  navegar(codTick: number) {
    this.router.navigate(['admin/infoEmpleado/' + localStorage.getItem('cedulaAdmin') + '/' + codTick]);
    localStorage.setItem('codEmpleadoAdmin', String(codTick));
  }


  ngOnInit() {
    if(localStorage.getItem("cedulaAdmin")==null)
    {
      this.router.navigate([''])
    }
    else {
      this.listadoEmpleados();

    }
  }
  listadoEmpleados(){
    const params = this.activateRoute.snapshot.params;
      this.adminService.cargarListadoEmpleados().subscribe(
        res => {
          console.log(res);
          this.listadoEmpleadosG = res;
          console.log(this.listadoEmpleadosG);
        },
        err => console.error(err)
      )


    console.log("AAAAAAAAA");
  }
}






