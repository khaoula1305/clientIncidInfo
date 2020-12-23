import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../service/message.service';
import { Message } from '../model/message';
import {AuthentificationService} from '../service/authentification.service';
import { User } from '../model/user';
import {UserService} from '../service/user.service'

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.scss']
})
export class ComposeMailComponent{

  message: Message;
  connectedUser: User;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
      private authentificationservice: AuthentificationService,
      private messageService: MessageService) {
            this.message = new Message();
            this.connectedUser = this.authentificationservice.getUser();
  }

  onSubmit() {
    let date: Date = new Date();
    let data = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getUTCHours() + ":" + date.getUTCMinutes();
    this.message.date=data;
    this.message.sender=this.connectedUser.nom;
    //this.message.reciever.
    this.messageService.save(this.message).subscribe(result => this.gotoMessageList());
  }

  gotoMessageList() {
    this.router.navigate(['/boite-mail']);
  }
}
