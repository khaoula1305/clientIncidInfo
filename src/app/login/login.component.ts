import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mail = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthentificationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.mail, this.password)
    ) {
      this.router.navigate(['/boite-mail'])
      this.invalidLogin = false
    } else
      alert(" Email ou mot de passe incorrecte")
      this.invalidLogin = true
  }

  
  

}
