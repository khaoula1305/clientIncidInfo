import { Component, OnInit } from '@angular/core';
import { IncidentsComponent } from '../knowledge-base/incidents/incidents.component';
import { User } from '../model/user';
import {AuthentificationService} from '../service/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  inc: IncidentsComponent ;
  currentUser: User;
  searchText;
  constructor(private authentificationService: AuthentificationService,
              private router: Router) {
      this.currentUser = this.authentificationService.getUser();
   }

  ngOnInit() {
  }

  Chercher() {
    // save current route first
    const currentRoute = this.router.url;
    console.log('1 ', currentRoute);
    switch (currentRoute) {
      case '/incidents': {
        // ici pour faire une recherche sur les incidents
        console.log('url ', currentRoute);
        // this.inc.chercher('serveur');
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      case 'boite-mail/receive': {
        // ici pour chercher les mails reçus
      }
    }
  }
  reloadPage() {
    window.location.reload();
    console.log("reload");
 }
}
