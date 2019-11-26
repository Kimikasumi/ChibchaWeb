import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pqr-cliente',
  templateUrl: './pqr-cliente.component.html',
  styleUrls: ['./pqr-cliente.component.css']
})
export class PqrClienteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("cedulaCliente")==null)
    {
      this.router.navigate([''])
    }
  }
}
