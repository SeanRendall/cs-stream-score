import { Component, OnInit } from '@angular/core';
import { HltvService } from '../hltv/hltv.service';
import { Router } from '@angular/router';
import { MdCardModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { DatePipe } from '@angular/common';
import { MapSlug } from 'hltv';

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

  getImageFromMapSlug(slug) {
    // return "https://hltv.org/img/static/maps/" + MapSlug[slug] + ".png"
    return "https://www.hltv.org/img/static/maps/mirage.png"
  }

  goToMatch(id) {
    this.router.navigate(['/match', id]);
  }

}
