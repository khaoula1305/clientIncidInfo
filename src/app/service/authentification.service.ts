/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  authenticate(username, password) {
    if (username === "javainuse" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}*/

import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import { User } from '../model/user';
import {UserService} from '../service/user.service'
import { truncateSync } from 'fs';
//import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  public host:string="https://localhost:9090";
  //private  jwtToken=null;
  public authenticated: boolean;
  public authenticatedUser;
  //public roles:any[]=[]
  

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser;
  user=new User();
  users: User[];
  constructor(private http: HttpClient, private userService: UserService) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    //  this.currentUser = this.currentUserSubject.asObservable();
      
  }

  authenticate(email,password){
    this.user.email=email
    this.user.password=password
    //return this.http.post('http://localhost:4200/login',this.user,{observe:'response'})

    this.userService.findAll().subscribe(data => {
      this.users = data; 
    });
    console.log(this.users.length);
    let user;
    this.users.forEach(u=>{
      if(u.email===email && u.password===password){
        user=u;
       }
     
     if(user){
      this.authenticated=true;
      this.authenticatedUser=user;
       localStorage.setItem("authenticatedUser",JSON.stringify(this.authenticatedUser));
       return true;
     }
    
    })
    
    this.authenticated=false;
    return false;
    
  }

  loadUser(){
    let user=localStorage.getItem('authenticatedUser');

    if(user){
      this.authenticatedUser=JSON.parse(user);
      this.authenticated=true;
    }
  }
/*saveToken(jwt:string){
  this.authenticated=true;
 // this.authenticatedUser=user;
this.jwtToken= jwt
localStorage.setItem('token',jwt);
console.log(this.currentUser)
console.log(localStorage)
let jwtHelper= new JwtHelperService()
// obtenir les roles du token
this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
this.currentUser=jwtHelper.decodeToken(this.jwtToken).sub
console.log(this.currentUser)
//console.log(this.roles)
}
loadToken(){
  this.jwtToken=localStorage.getItem('token')
}
isAdmin(){
   
    for (let r of this.roles){
      //  console.log(r)
      if(r=='ADMIN') return true;
    }
    return false;
}*/

getUser(){
  return this.currentUser;
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
