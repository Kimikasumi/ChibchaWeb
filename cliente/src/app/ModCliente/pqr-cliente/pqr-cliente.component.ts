import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import {IPQR} from '../../models/ICliente'

@Component({
  selector: 'app-pqr-cliente',
  templateUrl: './pqr-cliente.component.html',
  styleUrls: ['./pqr-cliente.component.css']
})
export class PqrClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    if(localStorage.getItem("cedulaCliente")==null)
    {
      this.router.navigate([''])
    }
    else{
      this.cargarPQRCliente();
    }
    
  }

  pqrCliente: IPQR = {
    descripcion: "",
    respuesta: "",
    nom_t_ticket:""
  }

  cargarPQRCliente(){
    const params = this.activateRoute.snapshot.params;
    if(params.cedula){
      this.clienteService.historialPQR().subscribe(
        res => {
          console.log(res);
          console.log("AAAAAAAAAAAAAAAAAA")
          
          this.pqrCliente = res;
        },
        err => console.error(err)
      )
    }
    console.log(params);
  }

}
