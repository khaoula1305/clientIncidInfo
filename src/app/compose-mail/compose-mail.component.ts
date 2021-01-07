import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../service/message.service';
import { Message } from '../model/message';
import {AuthentificationService} from '../service/authentification.service';
import { User } from '../model/user';
import {FormControl, NgForm, Validators} from '@angular/forms';
import { DataService } from '../service/data.service';
import {Incident} from '../model/incident';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-compose-mail',
 templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.scss']
})

export class ComposeMailComponent {
  messageControl = new FormControl('', Validators.required);
  // part of tech
  ManTech = true;
  users: Array<User> = new Array();
  message: Message;
  connectedUser: User;
  private typeCompteUser: any;
  private  receivers: Array<string> = [ 'Manager'] ;
  MailClicked: Message;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private messageService: MessageService,
    private data2: DataService,
    private authentificationService: AuthentificationService) {
    this.typeCompteUser = this.authentificationService.getTypeCompteUser();

    switch (this.typeCompteUser) {
      case 'Helpdesk': case 'Administrateur':    {
        this.receivers[0] = 'Manager Réseaux';
        this.receivers[1] = 'Manager Base de données';
        this.receivers[2] = 'Manager Système';
        break;
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      case 'Technicien' :  {
        this.receivers[0] = 'Manager';
        this.receivers[1] = 'Helpdesk';
        break;
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      case 'Manager' : {
        this.receivers[0] = 'Helpdesk';
        this.receivers[1] = 'Technicien';
        break;
      }
      case 'Collaborateur' : {
        this.receivers[0] = 'Helpdesk';
        break;
      }
    }
    this.message = new Message();
    this.connectedUser = this.authentificationService.getUser();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    //  this.MailClicked = this.data2.getClickedMail();
    this.id = this.route.snapshot.params['id'];
    if ( this.id ==  0) {
      console.log('Zero',  this.id);
      this.MailClicked = new Message();
   } else {
     this.messageService.getMessage(this.id)
       .subscribe(data => {
         console.log('data' , data);
         this.MailClicked = data;
       }, error => console.log(error));

   }
  }

  onSubmit(m: NgForm) {
    if ( m.untouched || m.invalid) {
      alert('Remplir les champs obligatoires');
    } else {
      const date: Date = new Date();
      const data = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getUTCHours() + ':' + date.getUTCMinutes();
      this.message.date = data;
      this.message.sender = this.connectedUser.nom;
      this.message.titre = m.value.titre;
      this.message.responses.push(m.value.description);
      if (!this.ManTech) {
        this.message.receiver = m.value.technician;
      } else {
        this.message.receiver = m.value.receiver;
      }
      this.message.read = false;
      this.message.traite = false;
      this.message.next = 0;
      this.messageService.save(this.message).subscribe(result => this.gotoMessageList());
    }
  }
  ManagerTechnicien(receiver: any) {
    let d: User;
    if( this.typeCompteUser == 'Manager' && receiver == 'Technicien' ) {
      this.ManTech= false;
      this.userService.findAllUsers().subscribe((data: User[]) => {
        for ( d of data){
          if (d.typeCompte == 'Technicien' && d.division == this.connectedUser.division ){
            this.users.push(d);
        }
        }
      },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('complete');
        }
      );
    } else {
      return true;
    }
  }
  gotoMessageList() {
    this.router.navigate(['boite-mail', 'sent']);
  }
}
