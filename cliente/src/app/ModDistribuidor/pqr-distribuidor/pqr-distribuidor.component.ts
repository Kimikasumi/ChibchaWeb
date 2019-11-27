import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {IDistribuidorInfo} from '../../models/IDistribuidor';
import {ITicketS} from '../../models/ITicket';
import { DistribuidorService } from '../../service/distribuidor.service'
import { IDominio } from 'src/app/models/IDominio';
@Component({
  selector: 'app-pqr-distribuidor',
  templateUrl: './pqr-distribuidor.component.html',
  styleUrls: ['./pqr-distribuidor.component.css']
})
export class PqrDistribuidorComponent implements OnInit {

  constructor(private distribuidorService: DistribuidorService, private router:Router) { }

  selDominios:any=[]

  infoSolicitud:ITicketS={
    cod_dominio:0,
    cod_t_ticket:0,
    nom_dominio:"",
    nombre:"",
    descripcion:"",
    nom_estado:"",
    cedula:0
  }
  infoDistribuidor:IDistribuidorInfo={
    cedula:0,
    nombre:"",
    cod_dominio: 0,
    nom_dominio:"",
    nom_p_pago:""
  }

  dominio:IDominio={
    cod_dominio:0,
    nom_dominio:"",
    cedula:0
  }

  
  ngOnInit() {
    if(localStorage.getItem("cedulaDistribuidor")==null)
    {
      this.router.navigate([''])
    }else{
      this.cargarOpciones()
    }
  }

  cargarOpciones(){
    let cedula: number= parseInt(localStorage.getItem('cedulaDistribuidor'));
      this.distribuidorService.cargarOpcionesPQR(cedula).subscribe(
        res => {
          this.selDominios=res
        },
        err => console.error(err)
      )
  }

  enviarSolicitud(){
    let cedula: number= parseInt(localStorage.getItem('cedulaDistribuidor'));
    let aux=this.infoSolicitud
    let cod_t_ticket=aux.cod_t_ticket
    console.log(aux)
    this.distribuidorService.obtenerDominio(aux).subscribe(
      res => {
        this.dominio=res
        aux.nom_dominio=this.dominio.nom_dominio
        aux.cedula=this.dominio.cedula
        aux.nombre=this.dominio.nombre
        console.log(aux)
          this.distribuidorService.crearSolicitud(cedula,aux).subscribe(
            res => {
           
            },
            err => console.error(err)
          )
      },
      err => console.error(err)
    )

  }

}
