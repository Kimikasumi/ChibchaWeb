import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IEmpleado} from '../../models/IEmpleado';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-empleado-admin',
  templateUrl: './empleado-admin.component.html',
  styleUrls: ['./empleado-admin.component.css']
})
export class EmpleadoAdminComponent implements OnInit {

  constructor(private router: Router, private adminService: AdminService) {
  }

  cliente: any = [];

  ngOnInit() {
    if (localStorage.getItem('cedulaAdmin') == null) {
      this.router.navigate(['']);
    }
  }

  empleadoGrafico:IEmpleado={
    cedula:0,
    nombre:"",
    correo:"",
    contrasenia:"",
    cod_t_empleado:0
}

  nuevoEmpleado(){

    console.log(this.empleadoGrafico)
    this.adminService.crearEmpleado(this.empleadoGrafico).subscribe(
      res=>{
        console.log(res);
        alert("Empleado Registrado")
      },
      err => console.error(err)
    );
  }
}
