import { Injectable } from '@angular/core';
import {Message} from '../model/message';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'}) 
export class MessageService {
  private MessagesUrl: string;

  constructor(private http: HttpClient) {
    this.MessagesUrl = 'http://localhost:9090/messages';
  }

  public findAll(): Observable<Message[]> {
    return this.http.get<Message[]>(this.MessagesUrl);
  }

  public save(message: Message) {
    return this.http.post<Message>(this.MessagesUrl, message);
  }
}
