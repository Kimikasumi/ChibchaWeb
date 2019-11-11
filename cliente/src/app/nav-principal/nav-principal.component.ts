import { Component } from '@angular/core';


@Component({
  selector: 'app-nav-principal',
  templateUrl: './nav-principal.component.html',
  styleUrls: ['./nav-principal.component.css']
})

export class NavPrincipalComponent {
  constructor() { }
  

  ngOnInit() {
  }


}


@Component({
  selector: 'registro-dialog',
  templateUrl: 'registro-dialog.component.html',
})
export class RegistroDialog {

  constructor() {

  }
}


/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'login-dialog',
  templateUrl: './login-dialog.component.html',
})
export class LoginDialog {
  
}

