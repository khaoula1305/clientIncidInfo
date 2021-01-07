import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { User } from '../model/user';
import {UserService} from '../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.scss']
})
export class ModifyUserComponent implements OnInit {
  user: User

  constructor(private data2: DataService,
    private route: ActivatedRoute,
    private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.user=this.data2.getClickedUser();
    console.log(this.user.id);
  }

  //Type de compte:
  typeComptes: any = ['Administrateur' , 'Collaborateur' , 'Helpdesk', 'Manager' , 'Technicien']
  divisions: any = ['Réseau', 'Système','Base de donnée']

  changeTypeCompte(e) {
    console.log(e.target.value);
    this.user.typeCompte=e.target.value;
  }
  changeDivision(e) {
    console.log(e.target.value);
    this.user.division=e.target.value;
  }

  selected = 'option2';
  //typeCompteForm = this.fb.group({typeDeCompte: ['']})
  onClickTypeCompte(){
    this.user.typeCompte=this.typeComptes.value
    //alert(JSON.stringify(this.typeComptes.value))
  }

  onSubmit() {
    this.updateUser();
    //this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }
  updateUser(){
    this.userService.updateUser(this.user.id, this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new User();
        alert("Utilisateur modifié");
        this.gotoUserList();
      }, error => console.log(error));
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
