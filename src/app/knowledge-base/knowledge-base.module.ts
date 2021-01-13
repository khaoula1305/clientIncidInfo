import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentsComponent } from './incidents/incidents.component';
import {FormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';



@NgModule({
  declarations: [IncidentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class KnowledgeBaseModule { }
