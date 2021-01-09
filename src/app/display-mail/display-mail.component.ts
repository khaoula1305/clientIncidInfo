import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Message } from '../model/message';
import {MessageService} from '../service/message.service';
import {AuthentificationService} from '../service/authentification.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-display-mail',
  templateUrl: './display-mail.component.html',
  styleUrls: ['./display-mail.component.scss']
})
export class DisplayMailComponent implements OnInit {

  MailClicked: Message = new Message();
  id: number;
  message: Message;
  isTech = false;
  show = true;
  typeCompteUser: string;
  reponses: Array<Message> = new Array<Message>();
  lastMessage: Message;

  constructor(private data2: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService,
              private  authentificationService: AuthentificationService) {
    this.typeCompteUser = this.authentificationService.getTypeCompteUser();


  }


  ngOnInit() {
    this.message = new Message();
    this.id = this.route.snapshot.params['id'];
    this.messageService.getMessage(this.id)
      .subscribe(data => {
        this.MailClicked = data;
      }, (error) => {
          console.log(error);
        },
        () => {
          this.Remplir(this.MailClicked);
          if ( this.MailClicked.sender != this.authentificationService.currentUser.nom && this.MailClicked.traite == false ) {
            this.isTech = true;
          }
          this.MailClicked.read = true;
          this.messageService.save( this.MailClicked).subscribe();
        });
  }
  Remplir(message: Message) {
    this.lastMessage = message;
    if (message.next > 1) {
      this.messageService.getMessage(message.next)
        .subscribe(data => {
          message = data;
        }, (error) => {
            console.log(error);
          },
          () => {
            this.reponses.push(message);
            this.Remplir(message);
          });
    }
  }
  showResponses(response: Message) {
    if (response.sender == this.MailClicked.sender) {
      return 'badge-success';
    } else {
      return 'badge-danger';
    }
  }
  showResponse() {
    this.show = this.show === false;
  }

  onSubmit(m: NgForm) {
    if ( m.untouched || m.invalid) {
      alert('Remplir les champs obligatoires');
    } else {
      this.show = true;
        // this.MailClicked.responses.push(m.value.description);
      // new message
      const date: Date = new Date();
      const data = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getUTCHours() + ':' + date.getUTCMinutes();
      this.message.date = data;
      this.message.sender = this.authentificationService.currentUser.nom;
      this.message.titre = this.MailClicked.titre;
      this.message.response = m.value.description;
      this.message.receiver = this.MailClicked.sender;
      this.message.read = false;
      this.message.traite = false;
      m.value.description = '';
      this.message.previous = this.lastMessage.id;
     // console.log(this.message);
      this.messageService.save(this.message).subscribe(result => {
      //  this.messageService.setParent(result, this.MailClicked);
     //    this.MailClicked.child.push(result);
        console.log(' result.id', result.id);
        this.lastMessage.next = result.id;
        // ici normalement update
        this.messageService.save( this.lastMessage).subscribe();
        this.router.navigate(['/display-mail', this.id])});
    }
  }

  goToMail(event) {
    // this.data2.changeClickedMail(this.MailClicked);
    this.router.navigate(['compose-mail', this.id]);
  }
}
