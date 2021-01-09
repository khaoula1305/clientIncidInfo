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
    // return this.http.get(`${this.MessagesUrl}`);
    return this.http.get(this.MessagesUrl).pipe(
    map((data: any) => {
      return data._embedded.messages as Message[];
    }));
  }
  findMessage(id: number): Message {
    let message: Message;
    this.getMessage(id).subscribe((data: Message) => {
      message = data;
    }, error => console.log(error));
    return message;
  }
  getMessage(id: number): Observable<any> {
    return this.http.get( this.MessagesUrl + '/' + id );
  }
  findById(id: number)  {
    return this.http.get(this.MessagesUrl + '/' + id).subscribe(
      (response: Message) => {
        console.log('response', response);
        return response;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('complete');
      }
    );
  }
  // ce url ne fonctionne pas
  update(id: number, value: Message) {
    return this.http.put(this.MessagesUrl + '/' + id, value);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.MessagesUrl + '/' + id);
  }
  public save(message: Message) {
    return this.http.post<Message>(this.MessagesUrl, message);
  }

  public setParent(result: Message, MailClicked: Message) {
    return this.http.put(this.MessagesUrl + '/' + MailClicked.id + '/parent', result );
  }
  public getChildren(id: number) {
    return this.http.get(this.MessagesUrl + '/' + id + '/children');
  }
}
