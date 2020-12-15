import { Injectable } from '@angular/core';
import {Incident} from '../model/incident';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({providedIn: 'root'})
export class IncidentService {
  private IncidentsUrl: string;

  constructor(private http: HttpClient) {
    this.IncidentsUrl = 'http://localhost:9090/incidents';
  }

  findAllIncidents(): Observable<Array<Incident>> {
    return this.http.get(this.IncidentsUrl).pipe(
    map((data: any) => {
      return data._embedded.incidents as Incident[];
    }));
  }

  public save(incident: Incident) {
    return this.http.post<Incident>(this.IncidentsUrl, incident);
  }
}
