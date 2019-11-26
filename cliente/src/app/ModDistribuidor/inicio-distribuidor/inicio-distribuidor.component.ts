import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-distribuidor',
  templateUrl: './inicio-distribuidor.component.html',
  styleUrls: ['./inicio-distribuidor.component.css']
})
export class InicioDistribuidorComponent implements OnInit {

  constructor(private router:Router) { }


  
  ngOnInit() {
    if(localStorage.getItem("cedulaCliente")==null)
    {
      this.router.navigate([''])
    }
  }

}
