import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-host-distribuidor',
  templateUrl: './host-distribuidor.component.html',
  styleUrls: ['./host-distribuidor.component.css']
})
export class HostDistribuidorComponent implements OnInit {

  constructor(private router:Router) { }


  
  ngOnInit() {
    if(localStorage.getItem("cedulaDistribuidor")==null)
    {
      this.router.navigate([''])
    }
  }

}
