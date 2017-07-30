import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { HltvService } from "../hltv/hltv.service"
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MatchDataResolver implements Resolve<any> {

  constructor(
    private HltvService: HltvService,
    private router: Router
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      let id = +route.paramMap.get('id');
      return this.HltvService.getMatch(id)
  }
}
