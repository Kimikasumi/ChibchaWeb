import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from "../../service/admin.service";


@Component({
  selector: 'app-listadoRegistradores-admin',
  templateUrl: './listadoRegistradores-admin.component.html',
  styleUrls: ['./listadoRegistradores-admin.component.css']
})
export class ListadoRegistradoresAdminComponent  implements OnInit {
  listadoRegistradoresG: any = [];
  nombre:string;

  constructor(private adminService: AdminService, private router: Router, private activateRoute: ActivatedRoute) { }

  navegar(codTick: number) {
    this.router.navigate(['admin/infoRegistrador/' + localStorage.getItem('cedulaAdmin') + '/' + codTick]);
    localStorage.setItem('codRegistradorAdmin', String(codTick));
  }



  ngOnInit() {
    if(localStorage.getItem("cedulaAdmin")==null)
    {
      this.router.navigate(['']);
    }
    else {
      this.listadoRegistradores();

    }
  }

  
  search(){
    if(this.nombre != ""){
      this.listadoRegistradoresG = this.listadoRegistradoresG.filter(res=>{
        return res.nombre.toLowerCase().match(this.nombre.toLowerCase());
      });
    }else if(this.nombre ==""){
      this.ngOnInit();
    }
   
  }
  listadoRegistradores(){
    const params = this.activateRoute.snapshot.params;
    this.adminService.cargarListadoRegistradores().subscribe(
      res => {
        console.log(res);
        this.listadoRegistradoresG = res;
        console.log(this.listadoRegistradoresG);
      },
      err => console.error(err)
    )


    console.log("AAAAAAAAA");
  }


}



















