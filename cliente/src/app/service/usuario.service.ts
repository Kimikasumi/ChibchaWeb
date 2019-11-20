import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ISesionUsuario} from '../models/ISesionUsuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_URI = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  identificarUsuario(usuario: ISesionUsuario){
    console.log(usuario)
    return this.http.post(`${this.API_URI}/usuario/sesion`, usuario);
  }
  
}
