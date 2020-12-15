import { Component, OnInit } from '@angular/core';
import { User} from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  public users;
  constructor( private userService:UserService) { }

  ngOnInit() {
    this.userService.findAll().subscribe(
      data=>{this.users=data;},
      err=>{console.log(err);}
    )

  }

}
