import { Injectable } from '@angular/core';
import {Incident} from '../model/incident';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  private IncidentsUrl: string;
  constructor(private http: HttpClient) {
    this.IncidentsUrl = 'http://localhost:8080/Incidents';
  }

  public findAll(): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.IncidentsUrl);
  }

  public save(incident: Incident) {
    return this.http.post<Incident>(this.IncidentsUrl, incident);
  }
}
