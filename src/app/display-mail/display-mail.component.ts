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

  MailClicked: Message;
  isTech = false;
  isAdmin = false ;
  show = true;
  constructor(private data2: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService,
              private  authentificationService: AuthentificationService) {
    const typeCompteUser = this.authentificationService.getTypeCompteUser();
    // tslint:disable-next-line:triple-equals
    switch (typeCompteUser) {
      case 'Administrateur': case 'Helpdesk': {
        this.isAdmin = true;
        break;
      }
      case 'Technicien': {
        this.isTech = true;
        break;
      }
    }
  }

  ngOnInit() {
    this.MailClicked = this.data2.getClickedMail();
    console.log(this.MailClicked);
  }

  showResponse() {
    this.show = this.show === false;
  }

  onSubmit(m: NgForm) {
    if ( m.untouched || m.invalid) {
      alert('Remplir les champs obligatoires');
    } else {
      const date: Date = new Date();
      const data = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getUTCHours() + ':' + date.getUTCMinutes();
      console.log( m.value);
      console.log(this.MailClicked);
      this.MailClicked.responses.push(m.value.description);
      console.log(this.MailClicked);
      this.show = true;
      m.value.description = '';
      this.messageService.save(this.MailClicked).subscribe(result => this.router.navigate(['/display-mail']));
    }

  }
}
