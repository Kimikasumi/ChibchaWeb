import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITicketS} from '../models/ITicket';
import { IDistribuidor } from '../models/IDistribuidor';
import {IDominio} from '../models/IDominio'
import { ICliente } from '../models/ICliente';
@Injectable({
  providedIn: 'root'
})
export class DistribuidorService {
  API_URI = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  cargarOpcionesPQR(cedula: number){
    console.log(cedula)
    return this.http.get(`${this.API_URI}/distribuidor/clientes/${cedula}`);
  }

  select(cedula: number){
    console.log(cedula)
    return this.http.get(`${this.API_URI}/distribuidor/clientes/dominios/select/${cedula}`);
  }
  

  crearSolicitud(cedula:number,infoTicket:ITicketS){
    return this.http.post(`${this.API_URI}/cliente/solicitud/${cedula}`,infoTicket);
  }

  obtenerDominio(aux:ITicketS){
    return this.http.post(`${this.API_URI}/regDominio/dominio/get`,aux);
  }
 
  historialPQR(cedulaCliente:number){
    return this.http.get(`${this.API_URI}/distribuidor/solicitudes/`+cedulaCliente)
  }

  listarClientes(){
    return this.http.get(`${this.API_URI}/distribuidor/clientes/`+localStorage.getItem('cedulaDistribuidor'))
  }

  obtenerDistribuidor(){
    return this.http.get(`${this.API_URI}/distribuidor/get/`+localStorage.getItem('cedulaDistribuidor'))
  }
  
  editarDistribuidor(distribuidor: IDistribuidor){
    return this.http.put(`${this.API_URI}/distribuidor/edit/`+localStorage.getItem("cedulaDistribuidor"), distribuidor)
  }
 
  listarDominios(){
    return this.http.get(`${this.API_URI}/distribuidor/clientes/dominios/`+localStorage.getItem('cedulaDistribuidor'))
  }

  obtenerRegistrador(cod_registrador:Number){
    return this.http.get(`${this.API_URI}/distribuidor/clientes/dominios/registrador/`+localStorage.getItem('cedulaDistribuidor')+"/"+cod_registrador)
  }

  crearDominio(cedula:number,infoDominio:IDominio){
    return this.http.post(`${this.API_URI}/distribuidor/clientes/dominios/registrador/${cedula}`,infoDominio);
  }

  crearCliente(cedula:number,cliente:ICliente){
    return this.http.post(`${this.API_URI}/distribuidor/clientes/${cedula}`,cliente);
  }

  
}
