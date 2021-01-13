import { Component, OnInit } from '@angular/core';
import {IncidentService} from '../../service/incident.service';
import {Incident} from '../../model/incident';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {

  incidents: Incident[];
  searchText: string;

  constructor(private incidentService: IncidentService) { }

  ngOnInit() {
    this.incidentService.findAllIncidents().subscribe(data => {
      this.incidents = data;
    });
  }


  isResolu(resolu: any) {
    if (resolu == true) {
      return 'text-primary';
    } else { return 'text-danger'; }

  }
}
