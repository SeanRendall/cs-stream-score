import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HltvService } from '../hltv/hltv.service';
import { DomSanitizer} from '@angular/platform-browser';
import { MdButtonModule } from '@angular/material';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  
  matchId: number;
  match: any;
  private sub: any;
  private currentStreamLink: any;

  constructor(private route: ActivatedRoute, private HltvService: HltvService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { match: any }) => {
        this.match = data.match
      });
  }

  selectStream(streamLink) {
    this.currentStreamLink = this.sanitizer.bypassSecurityTrustResourceUrl(streamLink);
  }

  // element to add scoreboard to
  // #video-playback > div.player-overlay.player-fullscreen-overlay.js-control-fullscreen-overlay

}
