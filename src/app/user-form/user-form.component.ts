import { Component } from '@angular/core';
//import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  user: User;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
   private userService: UserService
   //public fb: FormBuilder 
  ){
    this.user = new User();

  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

  //Type de compte:
  typeComptes: any = ['Administrateur' , 'Collaborateur' , 'Helpdesk', 'Manager' , 'Technicien']
  //typeCompteForm = this.fb.group({typeDeCompte: ['']})
  onClickTypeCompte(){
    this.user.typeCompte=this.typeComptes.value
    //alert(JSON.stringify(this.typeComptes.value))
  }
}
