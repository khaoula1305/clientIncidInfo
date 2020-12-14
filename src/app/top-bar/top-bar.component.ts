import { Component, OnInit } from '@angular/core';
import { IncidentsComponent } from '../knowledge-base/incidents/incidents.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  inc: IncidentsComponent ;
  constructor() { }

  ngOnInit() {
  }

  Chercher() {
  this.inc.chercher('serveur');
  }
}
