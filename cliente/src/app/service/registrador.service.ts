import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistradorService {

  API_URI = 'http://localhost:4000';

  constructor(private http: HttpClient) {
  }

  cargarSolicitudes(codRegistrador: number) {
    console.log(codRegistrador);
    return this.http.get(`${this.API_URI}/regDominio/solicitudes/${codRegistrador}`);
  }

  obtenerUno(codRegistrador: number, codTicket: number) {
    console.log(codRegistrador + ' ' + codTicket);
    return this.http.get(`${this.API_URI}/regDominio/solicitudes/${codRegistrador}/${codTicket}`);
  }

  accion(codRegistrador: number, codTicket: number, codDominio: number, opcion: number) {
    console.log(codTicket + ' ' + codRegistrador + ' ' + codDominio + ' ' + opcion);

//    if (opcion === 1) {
//    return this.http.put(`${this.API_URI}/regDominio/dominio/aceptar/${codRegistrador}/${codTicket}/${codDominio}`);
//    } else if (opcion === 2) {
//      return this.http.put(`${this.API_URI}/regDominio/dominio/rechazar/${codRegistrador}/${codTicket}/${codDominio}`);
//    }
  }
}
