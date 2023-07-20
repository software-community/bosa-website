import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AthleticsComponent } from './pages/sports/athletics/athletics.component';
import { BadmintonComponent } from './pages/sports/badminton/badminton.component';
import { BasketballComponent } from './pages/sports/basketball/basketball.component';
import { ChessComponent } from './pages/sports/chess/chess.component';
import { CricketComponent } from './pages/sports/cricket/cricket.component';
import { FootballComponent } from './pages/sports/football/football.component';
import { HockeyComponent } from './pages/sports/hockey/hockey.component';
import { LawnTennisComponent } from './pages/sports/lawn-tennis/lawn-tennis.component';
import { TableTennisComponent } from './pages/sports/table-tennis/table-tennis.component';
import { VolleyballComponent } from './pages/sports/volleyball/volleyball.component';
import { WeightliftingComponent } from './pages/sports/weightlifting/weightlifting.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'athletics', component: AthleticsComponent },
  { path: 'badminton', component: BadmintonComponent },
  { path: 'basketball', component: BasketballComponent },
  { path: 'chess', component: ChessComponent },
  { path: 'cricket', component: CricketComponent },
  { path: 'football', component: FootballComponent },
  { path: 'hockey', component: HockeyComponent },
  { path: 'tennis', component: LawnTennisComponent },
  { path: 'tableTennis', component: TableTennisComponent },
  { path: 'volleyball', component: VolleyballComponent },
  { path: 'weightlifting', component: WeightliftingComponent },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
