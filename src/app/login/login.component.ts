import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';
import {NgForm} from '@angular/forms';
import {AppComponent} from '../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mail = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router,
              private loginservice: AuthentificationService,
              private appcompoent: AppComponent) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.mail, this.password)
    ) {
      this.appcompoent.auth();
      // tslint:disable-next-line:triple-equals
      if (this.loginservice.currentUser.typeCompte == 'Technicien') {
        this.appcompoent.isTechnician();
        this.router.navigate(['/incidents']);
      } else { this.router.navigate(['/boite-mail']); }
    this.invalidLogin = false;
    } else {
      console.log(this.mail);
      console.log(this.password);
      alert(' Email ou mot de passe incorrecte');
    }
this.invalidLogin = true;
  }

  onSubmit() {
    this.checkLogin();
  }
}
