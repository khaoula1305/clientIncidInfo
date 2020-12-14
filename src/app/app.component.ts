import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ' Les incidents Informatiques';
  isAuth = false;
  isTechnician = false;
  auth() {
    this.isAuth = true;
  }
}
