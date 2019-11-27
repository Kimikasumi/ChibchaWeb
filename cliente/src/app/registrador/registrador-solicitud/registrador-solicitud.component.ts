import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RegistradorService} from '../../service/registrador.service';

@Component({
  selector: 'app-registrador-solicitud',
  templateUrl: './registrador-solicitud.component.html',
  styleUrls: ['./registrador-solicitud.component.css']
})
export class RegistradorSolicitudComponent implements OnInit {

  ticketsRegistrador: any = [];

  opciones: any = [
    {valor: 1, nom: 'Aceptar'},
    {valor: 2, nom: 'Denegar'}
  ];

  opcionAc: number;

  constructor(private registradorService: RegistradorService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (localStorage.getItem('codRegistrador') == null) {
      this.router.navigate(['']);
    }
    this.cargarSolicitud();
  }

  enviar(codDominio: number, opcion: number) {
    const codRegistrador: number = parseInt(localStorage.getItem('codRegistrador'), 10);
    const codTicket: number = parseInt(localStorage.getItem('codTicket'), 10);
    this.registradorService.accion(codRegistrador, codTicket, codDominio, opcion).subscribe(
      res => {
        this.ticketsRegistrador = res;
        console.log(this.ticketsRegistrador);
      }
    );
    this.router.navigate(['registrador/tabla/' + localStorage.getItem('codRegistrador')]);
  }

  regresar() {
    this.router.navigate(['registrador/tabla/' + localStorage.getItem('codRegistrador')]);
  }

  cargarSolicitud() {
    const codRegistrador: number = parseInt(localStorage.getItem('codRegistrador'), 10);
    const codTicket: number = parseInt(localStorage.getItem('codTicket'), 10);
    this.registradorService.obtenerUno(codRegistrador, codTicket).subscribe(
      res => {
       this.ticketsRegistrador = res;
       console.log(this.ticketsRegistrador);
      }
    );
  }

}
