import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentsComponent } from './incidents/incidents.component';
import { IncidentComponent } from './incident/incident.component';



@NgModule({
  declarations: [IncidentsComponent, IncidentComponent],
  imports: [
    CommonModule
  ]
})
export class KnowledgeBaseModule { }
