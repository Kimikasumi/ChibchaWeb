import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../service/cliente.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-registrador-inicio',
  templateUrl: './registrador-inicio.component.html',
  styleUrls: ['./registrador-inicio.component.css']
})
export class RegistradorInicioComponent implements OnInit {

  nombreRegistrador = 'Caps';

  constructor(private clienteService: ClienteService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (localStorage.getItem('codRegistrador') == null) {
      this.router.navigate(['']);
    }
  }
}
