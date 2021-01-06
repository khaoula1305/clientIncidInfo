import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import {UserService} from '../service/user.service';
import { DataService } from '../service/data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private data2: DataService,
    private route: ActivatedRoute,
    private router: Router,) {
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

  updateUser(event,user : User){
    this.data2.changeClickedUser(user);
    this.router.navigate(['/modify-user']);

  }

  reloadData() {
    this.userService.findAllUsers().subscribe(data => {
      this.users = data;
    });
  }

}
