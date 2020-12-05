import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import {UsersComponent} from './users/users.component';
import {MessagesComponent} from './messages/messages.component';
import {AppComponent} from './app.component';


const routes: Routes = [
    { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
    {path: 'test', component: UsersComponent},
  {path: 'messages', component: MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }