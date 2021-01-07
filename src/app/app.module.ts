import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { UsersComponent } from './users/users.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { IncidentFormComponent } from './incident-form/incident-form.component';
import { BoiteMailComponent } from './boite-mail/boite-mail.component';
import { IncidentListeComponent } from './incident-liste/incident-liste.component';
import { ComposeMailComponent } from './compose-mail/compose-mail.component';
import { DisplayMailComponent } from './display-mail/display-mail.component';
import { LoginComponent } from './login/login.component';
import {IncidentService} from './service/incident.service';
import {KnowledgeBaseModule} from './knowledge-base/knowledge-base.module';
import { ManagerComponent } from './manager/manager.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UsersComponent,
    SideBarComponent,
    TopBarComponent,
    IncidentFormComponent,
    BoiteMailComponent,
    IncidentListeComponent,
    ComposeMailComponent,
    DisplayMailComponent,
    LoginComponent,
    ManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FormsModule,
    KnowledgeBaseModule
  ],
  providers: [UserService, IncidentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
