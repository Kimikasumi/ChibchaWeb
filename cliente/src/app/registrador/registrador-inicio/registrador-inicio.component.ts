import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrador-inicio',
  templateUrl: './registrador-inicio.component.html',
  styleUrls: ['./registrador-inicio.component.css']
})
export class RegistradorInicioComponent implements OnInit {

  nombreRegistrador = 'Caps';

  constructor() { }

  ngOnInit() {
  }

}
