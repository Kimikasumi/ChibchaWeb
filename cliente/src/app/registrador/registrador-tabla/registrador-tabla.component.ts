import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RegistradorService} from '../../service/registrador.service';

@Component({
  selector: 'app-registrador-tabla',
  templateUrl: './registrador-tabla.component.html',
  styleUrls: ['./registrador-tabla.component.css']
})
export class RegistradorTablaComponent implements OnInit {

  ticketsRegistrador: any = [];

  constructor(private registradorService: RegistradorService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  navegar(codTick: number) {
    this.router.navigate(['registrador/solicitud/' + localStorage.getItem('codRegistrador') + '/' + codTick]);
    localStorage.setItem('codTicket', String(codTick));
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
