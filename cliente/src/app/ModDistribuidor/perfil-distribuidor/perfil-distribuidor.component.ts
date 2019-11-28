import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { Router, ActivatedRoute } from '@angular/router';
import { IDistribuidor} from '../../models/IDistribuidor';
import { IDominio} from '../../models/IDominio';
import {DistribuidorService} from '../../service/distribuidor.service';
/**
 * @title Bottom Sheet Overview
 */
@Component({
  selector: 'perfil-distribuidor.component',
  templateUrl: 'perfil-distribuidor.component.html',
  styleUrls: ['perfil-distribuidor.component.css'],
})
export class BottomSheetOverviewExample {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

}

@Component({
  selector: 'perfil-distribuidor.component',
  templateUrl: 'boton.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-perfil-distribuidor',
  templateUrl: './perfil-distribuidor.component.html',
  styleUrls: ['./perfil-distribuidor.component.css']
})
export class PerfilDistribuidorComponent implements OnInit {


  constructor(private router:Router, private distribuidorService: DistribuidorService,  private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    if(localStorage.getItem("cedulaDistribuidor")==null)
    {
      this.router.navigate([''])
    }else{
      this.cargarDistribuidor();
    }
  }

   distribuidorGrafico:IDistribuidor={
    cedula:0,
    nombre: "",
    correo: "",
    contrasenia: "",
    cod_t_distribuidor: 0,
    nom_t_distribuidor:"",
    val_comision:0
}

  arrdominioGrafico:any=[]
  dominioGrafico:IDominio={
  cod_dominio:0,
  nom_dominio:"",
  cedula:0,
  nombre:"",
  descripcion:"",
  cod_registrador:0,
  nom_registrador:"",
}

cargarDistribuidor(){
  const params = this.activateRoute.snapshot.params;
if(params.cedula){
  this.distribuidorService.obtenerDistribuidor().subscribe(
    res => {
      this.distribuidorGrafico = res;
    },
    err => console.error(err)
  )
  this.listarDominios();
}
}


guardarInfoDistribuidor(){
  this.distribuidorService.editarDistribuidor(this.distribuidorGrafico).
  subscribe(
    res=>{
      console.log(res);
      console.log(this.distribuidorGrafico);
    },
    err => console.error(err)
    
  )
}

listarDominios(){
  this.distribuidorService.listarDominios().
  subscribe(
    res=>{
      this.dominioGrafico=res
      this.arrdominioGrafico=res
      for(let i in this.dominioGrafico){
        let cod_registrador=this.dominioGrafico[i].cod_registrador
        this.distribuidorService.obtenerRegistrador(cod_registrador).
        subscribe(
          res=>{
            let nom_registrador=res[0].nombre
           this.dominioGrafico[i]["nom_registrador"]=nom_registrador
           this.dominioGrafico=this.arrdominioGrafico
            console.log(this.arrdominioGrafico)
          },
          err => console.error(err)
          
        )

      }

    },
    err => console.error(err)
    
  )
}

}

