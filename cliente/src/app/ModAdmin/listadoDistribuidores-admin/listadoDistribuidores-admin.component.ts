
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from "../../service/admin.service";

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-listadoDistribuidores-admin',
  templateUrl: './listadoDistribuidores-admin.component.html',
  styleUrls: ['./listadoDistribuidores-admin.component.css']
})
export class ListadoDistribuidoresAdminComponent  implements OnInit {


  listadoDistribuidoresG: any = [];


  constructor(private adminService: AdminService, private router: Router, private activateRoute: ActivatedRoute) { }

  navegar(codTick: number) {
    this.router.navigate(['admin/infoDistribuidor/' + localStorage.getItem('cedulaAdmin') + '/' + codTick]);
    localStorage.setItem('codDistribuidorAdmin', String(codTick));
  }


  ngOnInit() {
    if(localStorage.getItem("cedulaAdmin")==null)
    {
      this.router.navigate([''])
    }
    else {
      this.listadoDistribuidores();

    }
  }
  listadoDistribuidores(){
    const params = this.activateRoute.snapshot.params;
    this.adminService.cargarListadoDistribuidores().subscribe(
      res => {
        console.log(res);
        this.listadoDistribuidoresG = res;
        console.log(this.listadoDistribuidoresG);
      },
      err => console.error(err)
    )


    console.log("AAAAAAAAA");
  }
}









