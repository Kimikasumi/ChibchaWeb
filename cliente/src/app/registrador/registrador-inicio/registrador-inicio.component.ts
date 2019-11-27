import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RegistradorService} from '../../service/registrador.service';

@Component({
  selector: 'app-registrador-inicio',
  templateUrl: './registrador-inicio.component.html',
  styleUrls: ['./registrador-inicio.component.css']
})
export class RegistradorInicioComponent implements OnInit {

  nombreRegistrador = 'Caps';

  constructor(private registradorService: RegistradorService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (localStorage.getItem('codRegistrador') == null) {
      this.router.navigate(['']);
    }
  }
}
