import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HltvService {

  constructor(private http: Http) { }

  getMatches() {
    return this.http.get('/api/matches')
      .map((matchData) => matchData.json())
  }

  getMatch(id: number) {
    return this.http.get('/api/match/' + id)
      .map((matchData) => matchData.json())
  }
}
