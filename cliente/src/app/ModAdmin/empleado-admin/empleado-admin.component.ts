import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {IEmpleado} from "../../models/IEmpleado";
import {AdminService} from "../../service/admin.service";

@Component({
  selector: 'app-empleado-admin',
  templateUrl: './empleado-admin.component.html',
  styleUrls: ['./empleado-admin.component.css']
})
export class EmpleadoAdminComponent implements OnInit {

  constructor(private router:Router, private adminService: AdminService) { }



  ngOnInit() {
    if(localStorage.getItem("cedulaAdmin")==null)
    {
      this.router.navigate([''])
    }
  }

  nuevoEmpleado(){

    console.log(this.cliente)
    this.adminService.crearEmpleado().
    subscribe(
      res=>{
        console.log(res);
      },
      err => console.error(err)

    )
  }
}

}
