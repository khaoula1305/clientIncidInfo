import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import {UsersComponent} from './users/users.component';
import {MessagesComponent} from './messages/messages.component';
import {IncidentFormComponent} from './incident-form/incident-form.component';
import { BoiteMailComponent } from './boite-mail/boite-mail.component';
import { IncidentListeComponent } from './incident-liste/incident-liste.component';
import { ComposeMailComponent } from './compose-mail/compose-mail.component';
import { DisplayMailComponent } from './display-mail/display-mail.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
    {path: 'test', component: UsersComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'AjoutIncident', component: IncidentFormComponent},
  {path: 'boite-mail', component: BoiteMailComponent},
  {path: 'incident-liste', component: IncidentListeComponent},
  {path: 'compose-mail', component: ComposeMailComponent},
  {path: 'display-mail', component: DisplayMailComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
