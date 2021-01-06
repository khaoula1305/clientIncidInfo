import { Component, OnInit } from '@angular/core';
import { IncidentsComponent } from '../knowledge-base/incidents/incidents.component';
import { User } from '../model/user';
import {AuthentificationService} from "../service/authentification.service"

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  inc: IncidentsComponent ;
  currentUser: User;
  constructor(private authentificationServide : AuthentificationService) {
      this.currentUser = this.authentificationServide.getUser();
   }

  ngOnInit() {
  }

  Chercher() {
  this.inc.chercher('serveur');
  }
  reloadPage() {
    window.location.reload();
    console.log("reload");
 }
}
