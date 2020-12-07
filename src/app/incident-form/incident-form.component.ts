import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IncidentService} from '../service/incident.service';
import {Incident} from '../model/incident';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.scss']
})
export class IncidentFormComponent  {
  incident: Incident;
  constructor(private route: ActivatedRoute, private router: Router, private incidentService: IncidentService) {
  this.incident = new Incident();
  }
  onSubmit() {
  this.incidentService.save(this.incident);
}

}
