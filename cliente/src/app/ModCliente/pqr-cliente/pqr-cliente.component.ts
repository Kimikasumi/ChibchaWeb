import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import {IPQR} from '../../models/ICliente'
import {ITicketS} from '../../models/ITicket';
@Component({
  selector: 'app-pqr-cliente',
  templateUrl: './pqr-cliente.component.html',
  styleUrls: ['./pqr-cliente.component.css']
})
export class PqrClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    if(localStorage.getItem("cedulaCliente")==null)
    {
      this.router.navigate([''])
    }
    else{
      this.cargarPQRCliente();
      this.cargarOpciones();
    }
    
  }

  selDominios:any=[]

  infoSolicitud:ITicketS={
    cod_dominio:0,
    cod_t_ticket:1,
    nom_dominio:"",
    nombre:"",
    descripcion:"",
    nom_estado:"",
    cedula:0
  }
  arrpqrCliente:any=[]
  pqrCliente: IPQR = {
    descripcion: "",
    respuesta: "",
    nom_t_ticket:""
  }

  cargarPQRCliente(){
    const params = this.activateRoute.snapshot.params;
    if(params.cedula){
      this.clienteService.historialPQR().subscribe(
        res => {
          console.log(res);
          
          this.arrpqrCliente = res;
        },
        err => console.error(err)
      )
    }
    console.log(params);
  }


  cargarOpciones(){
    let cedula: string= localStorage.getItem('cedulaCliente');
    this.clienteService.cargarDominio(cedula).subscribe(
      res => {
        console.log("Entra")
        console.log(res)
        this.selDominios=res
      },
      err => console.error(err)
    )

  }

  enviarSolicitud(){
    let cedula: number= parseInt(localStorage.getItem('cedulaCliente'));
    let aux=this.infoSolicitud
    console.log(aux)
      this.clienteService.crearSolicitud(cedula,aux).subscribe(
        res => {
          console.log("Solicitud creada")
        },
        err => console.error(err)
        )

  }
}
