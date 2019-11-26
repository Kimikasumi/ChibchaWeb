import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICliente} from '../models/ICliente'


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

}
