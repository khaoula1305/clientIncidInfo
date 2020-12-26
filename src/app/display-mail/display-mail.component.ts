import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service'
import { Message } from '../model/message';
import {MessageService} from '../service/message.service'
import {AuthentificationService} from '../service/authentification.service';

@Component({
  selector: 'app-display-mail',
  templateUrl: './display-mail.component.html',
  styleUrls: ['./display-mail.component.scss']
})
export class DisplayMailComponent implements OnInit {

  MailClicked: Message;
  isTech = false;
  isAdmin = false ;
  constructor(private data2: DataService,
              private  authentificationService: AuthentificationService) {
    const typeCompteUser = this.authentificationService.getTypeCompteUser();
    // tslint:disable-next-line:triple-equals
    switch (typeCompteUser) {
      case 'Administrateur': this.isAdmin = true;
      // tslint:disable-next-line:no-switch-case-fall-through
      case 'Technicien': this.isTech = true;
    }
  }

  ngOnInit() {
    this.MailClicked = this.data2.getClickedMail();

  }
}
