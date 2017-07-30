import { Component, OnInit } from '@angular/core';
import { HltvService } from '../hltv/hltv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: any = []

  constructor(private router: Router, private HltvService: HltvService) { }

  ngOnInit() {
    this.HltvService.getMatches().subscribe(matches => {
      this.matches = matches;
    })
  }

  goToMatch(id) {
    this.router.navigate(['/match', id]);
  }

}
