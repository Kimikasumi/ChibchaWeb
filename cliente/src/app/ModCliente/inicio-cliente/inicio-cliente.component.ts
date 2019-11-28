import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import {ICliente} from '../../models/ICliente';
@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.component.html',
  styleUrls: ['./inicio-cliente.component.css']
})
export class InicioClienteComponent implements OnInit {

  
  constructor(private clienteService: ClienteService, private router: Router, private activateRoute: ActivatedRoute) {
   }

   clienteGrafico: ICliente = {
    cedula: 0,
    numero: "",
    plan_pago: "",
    paquete: "",
    correo: "",
    nombre: "",
    fecha_vencimiento: null,
    nom_t_tarjeta: "",
    cod_seguridad: 0
    
  }
  
  ngOnInit() {
    if(localStorage.getItem("cedulaCliente")==null)
    {
      this.router.navigate([''])
    }else{
      this.cargarPerfil();
    }
  }

  cargarPerfil(){
    const params = this.activateRoute.snapshot.params;
    if(params.cedula){
      this.clienteService.cargarPerfilCliente(params.cedula).subscribe(
        res => {
          this.clienteGrafico = res;
        },
        err => console.error(err)
      )
    }
  }

}
