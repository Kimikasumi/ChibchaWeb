import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.css']
})
export class InicioAdminComponent implements OnInit {

  constructor(private router:Router) { }


  
  ngOnInit() {
    if(localStorage.getItem("cedulaAdmin")==null)
    {
      this.router.navigate([''])
    }
  }

}
