import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {from, Observable} from 'rxjs';
import { Message } from '../model/message';
import {MessageService} from '../service/message.service';
import { DataService } from '../service/data.service';
import {AuthentificationService} from '../service/authentification.service';
import { User } from '../model/user';



@Component({
  selector: 'app-boite-mail',
  templateUrl: './boite-mail.component.html',
  styleUrls: ['./boite-mail.component.scss']
})
export class BoiteMailComponent implements OnInit {
  messages: Observable<Message[]>;
  connectedUser: User;
  typeMessages: string ;
  send: string;
  receive = true;
  constructor(private messageService: MessageService,
              private http: HttpClient,
              private router: Router,
              private data2: DataService,
              private route: ActivatedRoute,
              private authentificationservice: AuthentificationService) {
    this.connectedUser = this.authentificationservice.getUser();
  }

  ngOnInit() {
    this.typeMessages = this.route.snapshot.params['typeMessages'];
    if ( this.typeMessages == 'sent') {
      this.send = 'Envoyé à';
      this.receive = false;
    } else {
      this.send = 'Envoyé par';
      this.receive = true;
    }
    // To fill table with messages
    this.reloadData();
    /* this.messageService.findAllMessages().subscribe(data => {
      this.messages = data; */
    }
  reloadData() {
  this.messages = this.messageService.findAllMessages();
}
  deleteMessage(id: number) {
    this.messageService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  messageDetails(id: number) {
    this.router.navigate(['display-mail', id]);
  }

  func(sender: string, receiver: string) {
    if (this.receive === false) {
      return sender === this.connectedUser.nom;
    } else {
      return receiver === this.connectedUser.nom;
    }
  }
}

