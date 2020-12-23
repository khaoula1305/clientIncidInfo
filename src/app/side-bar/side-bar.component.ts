import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../service/authentification.service"

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private authentificationServide :AuthentificationService) {
 }

  ngOnInit() {
  }

  Deconnexion(){
    this.authentificationServide.logout();
    console.log("Deconnxion");
  }

}
