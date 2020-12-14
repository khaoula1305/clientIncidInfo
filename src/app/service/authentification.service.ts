import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import { User } from '../model/user';
import {UserService} from '../service/user.service'

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public host:string="https://localhost:9090";
  public authenticated: boolean;
  public authenticatedUser;
  

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser;

  user=new User();
  users: User[];
  constructor(private http: HttpClient, private userService: UserService) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();

    this.userService.findAllUsers().subscribe(data => {
      this.users = data; 
    });
  }

  authenticate(email,password){
    this.user.email=email
    this.user.password=password
    //return this.http.post('http://localhost:4200/login',this.user,{observe:'response'})
   
    let user;
    console.log(this.users);
    this.users.forEach(u=>{
      if(u.email===email && u.password===password){
        user=u;
       }
      }); 
    if(user){
    this.authenticated=true;
    this.authenticatedUser=user;
    this.currentUser=user;
      localStorage.setItem("authenticatedUser",JSON.stringify(this.authenticatedUser));
      console.log("Connected successfully");
      return true;
    }
    else{
      this.authenticated=false;
      return false;
    }
  }


  loadUser(){
    let user=localStorage.getItem('authenticatedUser');

    if(user){
      this.authenticatedUser=JSON.parse(user);
      this.authenticated=true;
    }
  }

getUser(){
  return this.currentUser;
}

getTypeCompteUser(){
  return this.currentUser.typeCompte;
}

isAuthenticated(){
   return this.authenticated;
}

logout(){
  
    //this.jwtToken=null;
    this.authenticated=false;
  
   localStorage.removeItem('authenticatedUse');

  }

}
