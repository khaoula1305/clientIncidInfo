import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable()
export class UserService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:9090/users';
  }


  findAllUsers(): Observable<Array<User>> {
    return this.http.get(this.usersUrl).pipe(
    map((data: any) => {
      return data._embedded.users as User[];
    }))
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
}
