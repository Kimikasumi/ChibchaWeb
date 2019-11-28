import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-empleado-side',
  templateUrl: './empleado-side.component.html',
  styleUrls: ['./empleado-side.component.css']
})
export class EmpleadoSideComponent {

  fillerNav = [
    {name: 'inicio', route: 'inicio/' + localStorage.getItem('cedula'), icon: 'home'},
    {name: 'solicitudes', route: 'solicitudes/' + localStorage.getItem('cedula'), icon: 'dashboard'},
    {name: 'cerrar sesión', route: ' ', icon: 'exit_to_app'}
  ];

  constructor() {
  }
}
