import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrador-side',
  templateUrl: './registrador-side.component.html',
  styleUrls: ['./registrador-side.component.css']
})
export class RegistradorSideComponent implements OnInit {

  fillerNav = [
    {name: 'inicio', route: 'inicio', icon: 'home'},
    {name: 'solicitudes', route: 'solicitudes', icon: 'dashboard'},
    {name: 'cerrar sesión', route: 'salir', icon: 'exit_to_app'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
