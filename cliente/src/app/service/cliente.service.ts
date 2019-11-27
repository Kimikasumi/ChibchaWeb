import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICliente} from '../models/ICliente'
import {ITicketS} from '../models/ITicket';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  API_URI = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  cargarPerfilCliente(cedula: string){
    console.log(cedula)
    return this.http.get(`${this.API_URI}/cliente/${cedula}`);
  }

  cargarDominio(cedula: string){
    return this.http.get(`${this.API_URI}/cliente/dominio/${cedula}`)
  }

  crearTarjeta(tarjeta: ICliente){
    return this.http.post(`${this.API_URI}/cliente/crearTarjeta/`,tarjeta)
  }

  editarCliente(cliente: ICliente){
    return this.http.put(`${this.API_URI}/cliente/editarCliente/`+localStorage.getItem("cedulaCliente"), cliente)
  }

  historialPQR(){
    return this.http.get(`${this.API_URI}/cliente/cargarPQR/`+localStorage.getItem("cedulaCliente"))
  }

  crearSolicitud(cedula:number,infoTicket:ITicketS){
    return this.http.post(`${this.API_URI}/cliente/solicitud/${cedula}`,infoTicket);
  }
}
