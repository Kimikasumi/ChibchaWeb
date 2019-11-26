import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-listadoRegistradores-admin',
  templateUrl: './listadoRegistradores-admin.component.html',
  styleUrls: ['./listadoRegistradores-admin.component.css']
})
export class ListadoRegistradoresAdminComponent  implements OnInit {

  constructor(private router:Router) { }


  
  ngOnInit() {
    if(localStorage.getItem("cedulaCliente")==null)
    {
      this.router.navigate([''])
    }
  }

}

