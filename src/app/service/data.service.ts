import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';
import { Message } from '../model/message';
@Injectable({
  providedIn: 'root'
})

export class DataService {

  mail: Message;
  private currentMessageSubject: BehaviorSubject<Message>;
  public currentMessage;

  user: User;
  private currentUserSubject: BehaviorSubject<User>;
  public currentClickedUser;

  // Stocker message clické afin de l'ouvrir et fonction pour changer son num
  constructor() {
    this.currentMessageSubject = new BehaviorSubject<Message>(JSON.parse(localStorage.getItem('currentMessage')));
    this.currentMessage = this.currentMessageSubject.asObservable();

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentClickedUser')));
    this.currentClickedUser = this.currentUserSubject.asObservable();
   }

  changeClickedMail(mail: Message) {
    // this.currentMessageSubject.next(mail);
    this.currentMessage = mail;
    // localStorage.setItem("authenticatedUser",JSON.stringify(this.authenticatedUser));
  }
  getClickedMail() {
    return this.currentMessage;
  }

  changeClickedUser(user: User) {
    this.currentClickedUser = user;
  }
  getClickedUser() {
    return this.currentClickedUser;
  }

}
