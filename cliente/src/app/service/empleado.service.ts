import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
}
