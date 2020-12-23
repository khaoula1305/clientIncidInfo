import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { from } from 'rxjs';
import { Message } from '../model/message';
import {MessageService} from '../service/message.service';
import { DataService } from '../service/data.service';
import {AuthentificationService} from '../service/authentification.service';
import { User } from '../model/user';
import {UserService} from '../service/user.service'
import { stringify } from 'querystring';
import { connected } from 'process';



@Component({
  selector: 'app-boite-mail',
  templateUrl: './boite-mail.component.html',
  styleUrls: ['./boite-mail.component.scss']
})
export class BoiteMailComponent implements OnInit {

  messages: Message[];
  MailClicked:Message;
  connectedUser: User;

  constructor(private messageService: MessageService,private http:HttpClient,private router: Router, private data2: DataService, private authentificationservice: AuthentificationService) {
    this.connectedUser = this.authentificationservice.getUser();
  }

  ngOnInit() {
    // To fill table with messages
    this.messageService.findAllMessages().subscribe(data => {
      this.messages = data;
    });
    // Variable globale message clické
    //this.data2.currentMessage.subscribe(mail => this.MailClicked = mail);

    //Variable global user connected
    //this.data3.currentUser.subscribe(user => this.connectedUser = user);

  }

  goToMail(event,a : Message){
    this.data2.changeClickedMail(a);
    //console.log("hna ai tkteb l msg avant " + this.data2.getClickedMail().id +" -- msg apres :"+ a.titre);
    this.router.navigate(['/display-mail']);
  }
}

