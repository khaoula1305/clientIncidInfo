import { Injectable } from '@angular/core';
import {Message} from '../model/message';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class MessageService {
  private MessagesUrl: string;

  constructor(private http: HttpClient) {
    this.MessagesUrl = 'http://localhost:9090/messages';
  }

  findAllMessages(): Observable<Array<Message>> {
    return this.http.get(this.MessagesUrl).pipe(
    map((data: any) => {
      return data._embedded.messages as Message[];
    }))
  }
  /*findAllMessagesRecieved(email: String): Observable<Array<Message>> {
    return this.http.get(this.MessagesUrl).pipe(
    map((data: any) => {
      return data._embedded.messages as Message[];
    }))
  }*/

  public save(message: Message) {
    return this.http.post<Message>(this.MessagesUrl, message);
  }
}
