import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HltvService } from '../hltv/hltv.service';
import { Match } from '../models/match';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  
  matchId: number;
  match: Match;
  private sub: any;

  constructor(private route: ActivatedRoute, private HltvService: HltvService) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { match: any }) => {
        this.match = data.match
      });
  }

}
