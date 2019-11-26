import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pqr-distribuidor',
  templateUrl: './pqr-distribuidor.component.html',
  styleUrls: ['./pqr-distribuidor.component.css']
})
export class PqrDistribuidorComponent implements OnInit {

  constructor(private router:Router) { }


  
  ngOnInit() {
    if(localStorage.getItem("cedulaCliente")==null)
    {
      this.router.navigate([''])
    }
  }

}
