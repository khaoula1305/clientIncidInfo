import { Component, OnInit } from '@angular/core';
import { DataService } from "../service/data.service"
import { Message } from '../model/message';
import {MessageService} from '../service/message.service'

@Component({
  selector: 'app-display-mail',
  templateUrl: './display-mail.component.html',
  styleUrls: ['./display-mail.component.scss']
})
export class DisplayMailComponent implements OnInit {

  //nbrMailClicked: string;
  nbrMailClicked: number;

  constructor(private data2: DataService) { }

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
  this.data2.currentMail.subscribe(mail => this.nbrMailClicked = mail);

  }
  /*  si data est de type Message

  message: Message;

  constructor(private data2: DataService) { }

  ngOnInit() {
    //Get Id of clicked mail to display
  this.data2.currentMail.subscribe(mail => this.message = mail)

  }
  */

}
