import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {​​​​​​​ ActivatedRoute, Router }​​​​​​​ from '@angular/router';
import { from } from 'rxjs';
import { Message } from '../model/message';
import {MessageService} from '../service/message.service'
import { DataService } from "../service/data.service"
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
  
  constructor(private messageService: MessageService,private http:HttpClient,private router: Router, private data2: DataService) {
  }
  nbrMailClicked:number;

  ngOnInit() {
    // To fill table with messages
    this.messageService.findAll().subscribe(data => {
      this.messages = data;
    });
    this.data2.currentMail.subscribe(mail => this.nbrMailClicked = mail)
    //to get clickable mail
    //this.data2.currentMessage.subscribe(message => this.hnaya = message)
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

  goToMail(event,a:number){
    console.log("hna ai tkteb l msg avant " + this.nbrMailClicked +"msg apres :"+ a);
    this.data2.changenumberMail(a);
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

