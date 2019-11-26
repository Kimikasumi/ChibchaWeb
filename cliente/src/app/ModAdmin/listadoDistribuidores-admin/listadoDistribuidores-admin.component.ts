import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-listadoDistribuidores-admin',
  templateUrl: './listadoDistribuidores-admin.component.html',
  styleUrls: ['./listadoDistribuidores-admin.component.css']
})
export class ListadoDistribuidoresAdminComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem("cedulaAdmin")==null)
    {
      this.router.navigate([''])
    }
  }

}

