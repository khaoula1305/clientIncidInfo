import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {​​​​​​​ ActivatedRoute, Router }​​​​​​​ from '@angular/router';
import { from } from 'rxjs';
import { Message } from '../model/message';
import {MessageService} from '../service/message.service'
import { DataService } from "../service/data.service"
import {AuthentificationService} from "../service/authentification.service"
import { User } from '../model/user';
import {UserService} from '../service/user.service'
import { stringify } from 'querystring';


@Component({
  selector: 'app-boite-mail',
  templateUrl: './boite-mail.component.html',
  styleUrls: ['./boite-mail.component.scss']
})
export class BoiteMailComponent implements OnInit {

  // par defaut
  /*
  constructor() { }

  ngOnInit() {
  }
  */

//Khawla code
  messages: Message[];
  //nbrMailClicked: number;

  constructor(private messageService: MessageService,private http:HttpClient,private router: Router, private data2: DataService, private data3: AuthentificationService) {
  }
  MailClicked:Message;
  connectedUser: User;

  ngOnInit() {
    // To fill table with messages
    this.messageService.findAllMessages().subscribe(data => {
      this.messages = data;
    });
    // Variable globale message clické
    this.data2.currentMail.subscribe(mail => this.MailClicked = mail);
    //Variable global user connected
    //this.data3.currentUser.subscribe(user => this.connectedUser = user);

  }
  //change value of data
  /*newMessage(a:number){
    this.data2.changenumberMail(a);
  }*/
  /*goToMail(a:number){
    //this.http.get('/display-mail');
    let num:string;
    num = a.toString( [radix] ));
    this.data2.changenumberMail(num);
    this.router.navigate(['/display-mail']);
  }*/

  /*
  goToMail(event,a:Message){
    console.log("hna ai tkteb l msg " + a.id);
    this.data2.changenumberMail(a);
    this.router.navigate(['/display-mail']);
  }*/

  /*goToMail(event,a:string){
    console.log("hna ai tkteb l msg avant " + this.data2.currentMail.pipe() +"msg apres :"+ a);
    this.data2.changenumberMail(a);
    this.router.navigate(['/display-mail']);
  }*/

  goToMail(event,a : Message){
    //console.log(this.connectedUser.nom);
    this.data2.changenumberMail(a);
    console.log("hna ai tkteb l msg avant " + this.MailClicked +"msg apres :"+ a);
    this.router.navigate(['/display-mail']);
  }



//Youssefi Code

  /*public messages;

  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit() {
    this.http.get("http://localhost:9090/messages")
      .subscribe(data=>{
        this.messages=data;
      },err=>{
        console.log(err);
      })
  }*/



}

