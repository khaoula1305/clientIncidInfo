import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../service/authentification.service';
import {User} from '../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  isTech = false;
  isAdmin = false ;
  messageNonLu: number;
  constructor( private authentificationService: AuthentificationService,
               private router: Router
  ) {
    const typeCompteUser = this.authentificationService.getTypeCompteUser();
    // tslint:disable-next-line:triple-equals
    switch (typeCompteUser) {
      case 'Administrateur': this.isAdmin = true;
      // tslint:disable-next-line:no-switch-case-fall-through
      case 'Technicien': this.isTech = true;
    }
  }

  ngOnInit() {

    let currentUser: User;
    currentUser = this.authentificationService.currentUser;

  }
  changeLocation(locationData) {

    // save current route first
    const currentRoute = this.router.url;
    console.log('loca ', locationData);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['boite-mail', locationData]); // navigate to same route
    });
  }
  /*Deconnexion(){
    this.authentificationServide.logout();
    console.log("Deconnxion");
  }*/

}
