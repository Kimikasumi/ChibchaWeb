import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-listadoEmpleados-admin',
  templateUrl: './listadoEmpleados-admin.component.html',
  styleUrls: ['./listadoEmpleados-admin.component.css']
})
export class ListadoEmpleadosAdminComponent  implements OnInit {

  constructor(private router:Router) { }


  
  ngOnInit() {
    if(localStorage.getItem("cedulaAdmin")==null)
    {
      this.router.navigate([''])
    }
  }

}


