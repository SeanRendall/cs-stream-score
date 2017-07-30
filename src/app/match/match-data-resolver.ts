import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { HltvService } from "../hltv/hltv.service"
import { Match } from '../models/match';

@Injectable()
export class MatchDataResolver implements Resolve<Match> {

  constructor(
    private HltvService: HltvService,
    private router: Router
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Match> {
      let id = +route.paramMap.get('id');
  
      return this.HltvService.getMatch(id).then(match => {
        if (match) {
          return match;
        } else { // id not found
          this.router.navigate(['/matches']);
          return null;
        }
      });
    }
}
