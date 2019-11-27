import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITicketS} from '../models/ITicket';
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
  
  
}
