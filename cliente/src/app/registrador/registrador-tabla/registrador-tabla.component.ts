import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ITicketC} from '../../models/ITicket';
import {RegistradorService} from '../../service/registrador.service';
import {parseLine} from 'tslint/lib/verify/lines';

@Component({
  selector: 'app-registrador-tabla',
  templateUrl: './registrador-tabla.component.html',
  styleUrls: ['./registrador-tabla.component.css']
})
export class RegistradorTablaComponent implements OnInit {

  ticketsRegistrador: any = [];

  ejemplo: any = [
    {hola: 'hola', chao: 'chao'},
    {hola: 'hola2', chao: 'chao2'},
    {hola: 'hola3', chao: 'chao3'}
  ];

  displayedColumns: string[] = ['nomDom', 'abrir'];
  dataSource = this.ejemplo;

  constructor(private registradorService: RegistradorService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  navegar() {
    this.router.navigate(['registrador/solicitud/' + localStorage.getItem('codRegistrador')]);
  }

  ngOnInit() {
    if (localStorage.getItem('codRegistrador') == null) {
      this.router.navigate(['']);
    }
    this.cargarSolicitud();
  }

  cargarSolicitud() {
    const codigo: number = parseInt(localStorage.getItem('codRegistrador'), 10);
    this.registradorService.cargarSolicitudes(codigo).subscribe(
      res => {
        this.ticketsRegistrador = res;
        console.log(this.ticketsRegistrador);
      }
    );
  }

}
