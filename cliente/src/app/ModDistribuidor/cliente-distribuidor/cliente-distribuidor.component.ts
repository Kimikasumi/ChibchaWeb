import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-distribuidor',
  templateUrl: './cliente-distribuidor.component.html',
  styleUrls: ['./cliente-distribuidor.component.css']
})
export class ClienteDistribuidorComponent implements OnInit {

  constructor(private router:Router) { }


  
  ngOnInit() {
    if(localStorage.getItem("cedulaDistribuidor")==null)
    {
      this.router.navigate([''])
    }
  }

}
