import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-host-cliente',
  templateUrl: './host-cliente.component.html',
  styleUrls: ['./host-cliente.component.css']
})
export class HostClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    if(localStorage.getItem("cedulaCliente")==null)
    {
      this.router.navigate([''])
    }
  }

}
