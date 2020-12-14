import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../service/message.service';
import { Message } from '../model/message';

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.scss']
})
export class ComposeMailComponent{

  message: Message;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private messageService: MessageService) {
    this.message = new Message();
  }

  onSubmit() {
    let date: Date = new Date();
    let data = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getUTCHours() + ":" + date.getUTCMinutes();
    this.message.date=data;
    this.message.sender="Helpdesk"
    this.messageService.save(this.message).subscribe(result => this.gotoMessageList());
  }

  gotoMessageList() {
    this.router.navigate(['/boite-mail']);
  }
}
