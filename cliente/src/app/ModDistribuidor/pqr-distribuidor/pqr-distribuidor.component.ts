import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {IDistribuidorInfo} from '../../models/IDistribuidor';
import {IPQR} from '../../models/IDistribuidor';
import {ITicketS} from '../../models/ITicket';
import { DistribuidorService } from '../../service/distribuidor.service'
import { IDominio } from 'src/app/models/IDominio';
@Component({
  selector: 'app-pqr-distribuidor',
  templateUrl: './pqr-distribuidor.component.html',
  styleUrls: ['./pqr-distribuidor.component.css']
})
export class PqrDistribuidorComponent implements OnInit {

  constructor(private distribuidorService: DistribuidorService, private router:Router,  private activateRoute: ActivatedRoute) { }

  selDominios:any=[]

  arrpqrDistribuidor:any=[]
  pqrDistribuidor: IPQR = {
    descripcion: "",
    respuesta: "",
    nom_t_ticket:"",
    nom_estado:""
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
      this.cargarPQRDistribuidor()
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
              console.log("Solicitud creada")
            },
            err => console.error(err)
          )
      },
      err => console.error(err)
    )

  }

  cargarPQRDistribuidor(){
    const params = this.activateRoute.snapshot.params;
    let clientes:any=[]
    if(params.cedula){
      this.distribuidorService.listarClientes().subscribe(
        res => {
          let cedulas:any=[]
          clientes=res
          for(let x in clientes){
            let aux = clientes[x]
            cedulas.push(aux.cedula)
          }
          for(let y in cedulas){
            this.distribuidorService.historialPQR(cedulas[y]).subscribe(
              res => {
                this.arrpqrDistribuidor = res;
                console.log(this.arrpqrDistribuidor)
              },
              err => console.error(err)
            )
          }
        },
        err => console.error(err)
      )

      }
  }


}
