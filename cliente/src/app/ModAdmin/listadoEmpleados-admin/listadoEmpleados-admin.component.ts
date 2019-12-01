import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from "../../service/admin.service";
import {MatTableDataSource} from '@angular/material/table';
import {pruebaE} from '../../models/IEmpleado'
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
  nombre:string;
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

  search(){
    if(this.nombre != ""){
      this.listadoEmpleadosG = this.listadoEmpleadosG.filter(res=>{
        return res.nombre.toLowerCase().match(this.nombre.toLowerCase());
      });
    }else if(this.nombre ==""){
      this.ngOnInit();
    }
   
  }


  applyFilter(filterValue: string) {
    this.listadoEmpleadosG.filter = filterValue.trim().toLowerCase();
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



