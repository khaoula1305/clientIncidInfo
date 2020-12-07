import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
/*
import { from } from 'rxjs';
import { Message } from '../model/message';
import {MessageService} from '../service/message.service'*/

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
  /*messages: Message[];

  constructor(private messageService: MessageService) {
  }


  ngOnInit() {
    this.messageService.findAll().subscribe(data => {
      this.messages = data;
    });
  }*/
  

//Youssefi Code

  
  public messages;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:9090/messages")
      .subscribe(data=>{
        this.messages=data;
      },err=>{
        console.log(err);
      })
  }
  
}

