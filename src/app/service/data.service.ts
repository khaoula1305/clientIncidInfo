import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../model/message';
import {MessageService} from '../service/message.service';
@Injectable({
  providedIn: 'root'
})

export class DataService {

  mail: Message;
  private currentMessageSubject: BehaviorSubject<Message>;
  public currentMessage;

  // Stocker message clické afin de l'ouvrir et fonction pour changer son num
  constructor() {
    this.currentMessageSubject = new BehaviorSubject<Message>(JSON.parse(localStorage.getItem('currentMessage')));
    this.currentMessage = this.currentMessageSubject.asObservable();
   }

  changeClickedMail(mail: Message) {
    // this.currentMessageSubject.next(mail);
    this.currentMessage = mail;
    // localStorage.setItem("authenticatedUser",JSON.stringify(this.authenticatedUser));
  }
  getClickedMail() {
    return this.currentMessage;
  }

}
