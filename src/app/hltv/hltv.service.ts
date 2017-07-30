import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Match } from '../models/match'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HltvService {

  constructor(private http: Http) { }

  getMatches() {
    return this.http.get('/api/matches')
      .map((matchData) => matchData.json())
  }

  getMatch(id: number): Observable<Match> {
    return this.http.get('/api/match/' + id)
      .map((matchData) => matchData.json())
  }
}
