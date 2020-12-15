import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Incident } from '../model/incident';
import {IncidentService} from '../service/incident.service';
@Component({
  selector: 'app-incident-liste',
  templateUrl: './incident-liste.component.html',
  styleUrls: ['./incident-liste.component.scss']
})
export class IncidentListeComponent implements OnInit {

  incidents: Incident[];

  constructor(private incidentService: IncidentService) { }

  ngOnInit() {
    this.incidentService.findAllIncidents().subscribe(data => {
      this.incidents = data;
    });
  }

}
