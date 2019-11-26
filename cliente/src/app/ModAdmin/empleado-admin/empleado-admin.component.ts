import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleado-admin',
  templateUrl: './empleado-admin.component.html',
  styleUrls: ['./empleado-admin.component.css']
})
export class EmpleadoAdminComponent implements OnInit {

  constructor(private router:Router) { }


  
  ngOnInit() {
    if(localStorage.getItem("cedulaCliente")==null)
    {
      this.router.navigate([''])
    }
  }

}
