
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
  nombre:string;

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

  search(){
    if(this.nombre != ""){
      this.listadoDistribuidoresG = this.listadoDistribuidoresG.filter(res=>{
        return res.nombre.toLowerCase().match(this.nombre.toLowerCase());
      });
    }else if(this.nombre ==""){
      this.ngOnInit();
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
  }

  generarCheques(){
    let suma:number;
    let distribuidor=this.listadoDistribuidoresG
    for(let x in distribuidor){
      let aux=distribuidor[x].cedula
      this.adminService.generarCheque(aux).subscribe(
        res => {
          //suma=suma+res
          console.log(res)
        },
        err => console.error(err)
      )


    }

  }

}









