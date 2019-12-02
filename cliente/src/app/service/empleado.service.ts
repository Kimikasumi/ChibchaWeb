import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITicketE} from '../models/ITicket';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  API_URI = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  cargarSolicitudes(codTempleado: number) {
    console.log(codTempleado);
    return this.http.get(`${this.API_URI}/empleado/ticket/${codTempleado}`);
  }

  cargarTicket(codTicket: number) {
    console.log(codTicket);
    return this.http.get(`${this.API_URI}/empleado/ticket/get/${codTicket}`);
  }

  cargarHoster(codTicket: number) {
    console.log(codTicket);
    return this.http.get(`${this.API_URI}/empleado/ticket/host/${codTicket}`);
  }

  obtenerPlanesPago() {
    return this.http.get(`${this.API_URI}/empleado/opciones/PlanesPago`);
  }

  obtenerPaquetes() {
    return this.http.get(`${this.API_URI}/empleado/opciones/Paquetes`);
  }

  obtenerRegistradores() {
    return this.http.get(`${this.API_URI}/empleado/opciones/registradores`);
  }

  responderErr(codTicket: number, codEmpleado: number, ticket: ITicketE) {
    return this.http.put(`${this.API_URI}/empleado/ticket/responderErr/${codTicket}/${codEmpleado}`, ticket);
  }

  responderPqr(codTicket: number, cedula: number, ticket: ITicketE) {
    return this.http.put(`${this.API_URI}/empleado/ticket/responderPqr/${codTicket}/${cedula}`, ticket);
  }

  responderDom(codTicket: number, cedula: number, ticket: ITicketE) {
    return this.http.put(`${this.API_URI}/empleado/ticket/responderDom/${codTicket}/${cedula}`, ticket);
  }
}
