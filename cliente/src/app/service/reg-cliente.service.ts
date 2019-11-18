import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IRegistrarCliente} from '../models/IRegistrarCliente'

@Injectable({
  providedIn: 'root'
})
export class RegClienteService {
  
  API_URI = 'http://localhost:4000'

  constructor(private http: HttpClient) { }


  saveCliente(cliente: IRegistrarCliente){
    return this.http.post(`${this.API_URI}/cliente/crear`, cliente);
  }
}
