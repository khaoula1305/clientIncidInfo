import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-liste',
  templateUrl: './incident-liste.component.html',
  styleUrls: ['./incident-liste.component.scss']
})
export class IncidentListeComponent implements OnInit {

  public incidents;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:9090/incidents')
      .subscribe(data => {
        this.incidents = data;
      }, err => {
        console.log(err);
      });
  }

}
