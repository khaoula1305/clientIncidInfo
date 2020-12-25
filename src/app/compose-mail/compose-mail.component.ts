import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../service/message.service';
import { Message } from '../model/message';
import {AuthentificationService} from '../service/authentification.service';
import { User } from '../model/user';
import {FormControl, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-compose-mail',
 templateUrl: './compose-mail.component.html',
  /*template: ' ' +
    ' <form #message="ngForm" (ngSubmit)="onSubmit(message)" novalidate>\n' +
    '      <input name="titre" ngModel required #titre="ngModel">\n' +
    '      <input name="description" ngModel>\n' +
    '      <button>Submit</button>\n' +
    '<select name="receiver" ngModel required > ' +
    '<option [value]=""> envoyer à </option>' +
    '<option *ngFor="let r of receivers" [value]="r.valueOf()" > {{r.valueOf()}}</option>' +
    '</select>' +
    '    </form>',*/
  styleUrls: ['./compose-mail.component.scss']
})
export class ComposeMailComponent {
  messageControl = new FormControl('', Validators.required);
  message: Message;
  connectedUser: User;
  private typeCompteUser: any;
  private  receivers: Array<string> = [ 'Manager'] ;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private authentificationService: AuthentificationService) {
    this.typeCompteUser = this.authentificationService.getTypeCompteUser();

    switch (this.typeCompteUser) {
      case 'Helpdesk': case 'Administrateur':    {
        this.receivers[0] = 'Manager';
        this.receivers[1] = 'Collaborateur';
        break;
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      case 'Technicien' :  {
        this.receivers[0] = 'Manager';
        this.receivers[1] = 'Helpdesk';
        break;
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      case 'Manager' : {
        this.receivers[0] = 'Helpdesk';
        this.receivers[1] = 'Technicien';
        break;
      }
    }
    this.message = new Message();
    this.connectedUser = this.authentificationService.getUser();
  }
  onSubmit(m: NgForm) {
    const date: Date = new Date();
    const data = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getUTCHours() + ':' + date.getUTCMinutes();
    this.message.date = data;
    this.message.sender = this.connectedUser.nom;
    console.log( m.value);
    this.message.titre = m.value.titre;
    this.message.description = m.value.description;
    this.message.receiver = m.value.receiver;
    this.messageService.save(this.message).subscribe(result => this.gotoMessageList());
  }
  /*onSubmit() {
    const date: Date = new Date();
    const data = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getUTCHours() + ':' + date.getUTCMinutes();
    this.message.date = data;
    this.message.sender = this.connectedUser.nom;
    this.messageService.save(this.message).subscribe(result => this.gotoMessageList());
  }*/

  gotoMessageList() {
    this.router.navigate(['/boite-mail']);
  }
}
