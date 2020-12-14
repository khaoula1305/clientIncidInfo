import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {

  public incidents;


  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get('http://localhost:9090/incidents')
      .subscribe(data => {
        this.incidents = data;
      }, err => {
        console.log(err);
      });
  }
  chercher(mot: any) {
    this.http.get('http://localhost:9090/incidents/search/byDescription?motcle=' + mot)
      .subscribe(data => {
        this.incidents = data;
      }, err => {
        console.log(err);
      });
  }


  isResolu(resolu: any) {
    if (resolu === true) {
      return 'text-primary';
    } else { return 'text-danger'; }

  }
}
