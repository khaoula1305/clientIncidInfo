import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../model/message';
import {MessageService} from '../service/message.service'
@Injectable({
  providedIn: 'root'
})

export class DataService {

  // Stocker numero de mail clické afin de l'ouvrir et fonction pour changer son num

  //mail: string
  /*private mailSource = new BehaviorSubject<string>("10");
  currentMail = this.mailSource.asObservable();

  changenumberMail(mail: string){
    this.mailSource.next(mail);
  }
  constructor() { }*/

  //mail: string
  private mailSource = new BehaviorSubject<number>(10);
  currentMail = this.mailSource.asObservable();

  changenumberMail(mail: number){
    this.mailSource.next(mail);
  }
  constructor() { }

 /* mail: Message;
  // Stocker message clické afin de l'ouvrir et fonction pour changer son num
  private mailSource = new BehaviorSubject<Message>(null);
  currentMail = this.mailSource.asObservable();

  changenumberMail(mail: Message){
    this.mailSource.next(mail);
  }
  constructor() { }*/

}
