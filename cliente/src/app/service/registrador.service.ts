import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistradorService {

  API_URI = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  cargarSolicitudes(codRegistrador: number) {
    console.log(codRegistrador);
    return this.http.get(`${this.API_URI}/regDominio/solicitudes/${codRegistrador}`);
  }

}
