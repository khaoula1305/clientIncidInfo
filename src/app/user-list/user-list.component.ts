import { Component, OnInit } from '@angular/core';
//import { Console } from 'console';
import { User } from '../model/user';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(id){
    console.log("user with id is deleted" + id);
    this.userService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  reloadData() {
    this.userService.findAllUsers().subscribe(data => {
      this.users = data;
    });
  }

}
