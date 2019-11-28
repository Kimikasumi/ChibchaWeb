import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistribuidorService } from '../../service/distribuidor.service'
import {ITicketS} from '../../models/ITicket';
import { IDominio } from '../../models/IDominio';
@Component({
  selector: 'app-host-distribuidor',
  templateUrl: './host-distribuidor.component.html',
  styleUrls: ['./host-distribuidor.component.css']
})
export class HostDistribuidorComponent implements OnInit {

  constructor(private distribuidorService: DistribuidorService, private router:Router,  private activateRoute: ActivatedRoute) { }


  selClientes:any=[]
  
  ngOnInit() {
    if(localStorage.getItem("cedulaDistribuidor")==null)
    {
      this.router.navigate([''])
    }else{
      this.cargarOpciones();
    }
  }
  infoSolicitud:ITicketS={
    cod_dominio:0,
    cod_t_ticket:0,
    nom_dominio:"",
    nombre:"",
    descripcion:"",
    nom_estado:"",
    cedula:0
  }

  dominioGrafico:IDominio={
    cod_dominio:0,
    nom_dominio:"",
    cedula:0,
    nombre:"",
    descripcion:""
  }
  cargarOpciones(){
    let cedula: number= parseInt(localStorage.getItem('cedulaDistribuidor'));
      this.distribuidorService.select(cedula).subscribe(
        res => {
          this.selClientes=res
        },
        err => console.error(err)
      )
  }
  
crearDominio(){
  let cedula: number= parseInt(localStorage.getItem('cedulaDistribuidor'));
  this.dominioGrafico.cedula=this.infoSolicitud.cedula
  this.dominioGrafico.nom_dominio=this.infoSolicitud.nom_dominio
  this.dominioGrafico.descripcion=this.infoSolicitud.descripcion
  console.log(this.dominioGrafico)

  this.distribuidorService.crearDominio(cedula,this.dominioGrafico).subscribe(
    res => {
      console.log("Dominio Creado")
    },
    err => console.error(err)
  )
}

}
