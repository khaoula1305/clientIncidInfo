import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../service/authentification.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  isTech = false;
  isAdmin = false ;
  constructor( private authentificationService: AuthentificationService) {
    const typeCompteUser = this.authentificationService.getTypeCompteUser();
    // tslint:disable-next-line:triple-equals
    switch (typeCompteUser) {
      case 'Administrateur': this.isAdmin = true;
      // tslint:disable-next-line:no-switch-case-fall-through
      case 'Technicien': this.isTech = true;
    }
  }

  ngOnInit() {
  }
  reloadPage() {
    window.location.reload();
    console.log("reload");
 }
  /*Deconnexion(){
    this.authentificationServide.logout();
    console.log("Deconnxion");
  }*/

}
