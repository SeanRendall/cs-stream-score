import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MatchesComponent } from './matches/matches.component';
import { HltvService } from './hltv/hltv.service';
import { MatchComponent } from './match/match.component';
import { MatchDataResolver } from './match/match-data-resolver';

const ROUTES = [
  {
    path: '',
    redirectTo: 'matches',
    pathMatch: 'full'
  },
  {
    path: 'matches',
    component: MatchesComponent
  },
  {
    path: 'match/:id',
    component: MatchComponent,
    resolve: {
      match: MatchDataResolver
    }
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [HltvService, MatchDataResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
