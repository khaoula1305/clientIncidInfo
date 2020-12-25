import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service'
import { Message } from '../model/message';
import {MessageService} from '../service/message.service'

@Component({
  selector: 'app-display-mail',
  templateUrl: './display-mail.component.html',
  styleUrls: ['./display-mail.component.scss']
})
export class DisplayMailComponent implements OnInit {

  MailClicked: Message;

  constructor(private data2: DataService) { }

  ngOnInit() {
    this.MailClicked = this.data2.getClickedMail();

  }
}
