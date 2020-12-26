import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IncidentService} from '../service/incident.service';
import {Incident} from '../model/incident';
import {AuthentificationService} from '../service/authentification.service';
import {User} from '../model/user';
import {MessageService} from '../service/message.service';
import {Message} from '../model/message';
import {DataService} from '../service/data.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.scss']
})
export class IncidentFormComponent  implements OnInit {
  incident: Incident;
  connectedUser: User;
  MailClicked: Message;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private incidentService: IncidentService,
              private messageService: MessageService,
              private data2: DataService,
              private authenticationService: AuthentificationService) {
    this.connectedUser = this.authenticationService.getUser();
    this.MailClicked = this.data2.getClickedMail();
    this.incident = new Incident();
  }
  ngOnInit() {
    console.log(this.MailClicked);
    console.log(this.MailClicked.titre);
  }
  onSubmit(m: NgForm) {
    this.incident.affectedto = this.connectedUser.nom;
    this.incident.collaborateur = this.MailClicked.sender;
    this.incident.date = this.MailClicked.date;
    this.incident.division = this.connectedUser.division;
    this.incident.description = m.value.description;
    this.incident.titre = m.value.titre;
    this.incident.solution = m.value.solution;
    this.MailClicked.traite = true;
    this.incident.resolue = true;
    this.incidentService.save(this.incident).subscribe(result => this.gotoIncidentList());
}

  private gotoIncidentList() {
    this.router.navigate(['/incidents']);
  }
}
