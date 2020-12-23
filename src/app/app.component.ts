import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from './service/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private loginservice: AuthentificationService) {
  }
  title = ' Les incidents Informatiques';
  isAuth = this.loginservice.isAuthenticated();
  isTech = true;

  isTechnician() {
    if (this.loginservice.getTypeCompteUser() == 'Technicien') {
    this.isTech = false ;
    }
  }
  auth() {
    this.isAuth = this.loginservice.authenticated;
  }
}
