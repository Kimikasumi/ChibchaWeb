import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IEmpleado} from '../models/IEmpleado'
import { IDistribuidor } from '../models/IDistribuidor';
import { IRegistrador } from '../models/IRegistrador';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  API_URI = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  cargarPerfilAdmin(cedula: string){
    console.log(cedula)
    return this.http.get(`${this.API_URI}/admin/perfilAdmin/${cedula}`);
  }

  cargarListadoEmpleados(){
    return this.http.get(`${this.API_URI}/admin/empleado`);
  }
  obtenerEmpleado(cedulaAdmin: string ,cedulaEmpleado: string){
    return this.http.get(`${this.API_URI}/admin/empleado/${cedulaAdmin}/${cedulaEmpleado}`);
  }

  cargarListadoDistribuidores(){
    return this.http.get(`${this.API_URI}/admin/distribuidor`);
  }
  obtenerD(cedulaAdmin: string ,cedulaDistribuidor: string){
    return this.http.get(`${this.API_URI}/admin/distribuidor/${cedulaAdmin}/${cedulaDistribuidor}`);
  }

  obtenerR(cedulaAdmin: string ,cedulaRegistrador: string){
    return this.http.get(`${this.API_URI}/admin/registrador/${cedulaAdmin}/${cedulaRegistrador}`);
  }
  cargarListadoRegistradores(){
    return this.http.get(`${this.API_URI}/admin/registrador`);
  }

  crearEmpleado(empleado:IEmpleado){
    return this.http.post(`${this.API_URI}/admin/empleado/crear`,empleado);
  }
  crearDistribuidor(distribuidor:IDistribuidor){
    return this.http.post(`${this.API_URI}/admin/distribuidor`,distribuidor);
  }

  selPais(){
    return this.http.get(`${this.API_URI}/admin/registrador/selPaises`);
  }
  
  crearRegistrador(registrador:IRegistrador){
    return this.http.post(`${this.API_URI}/admin/registrador`, registrador);
  }
}


