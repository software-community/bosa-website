import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { WinnersComponent } from './pages/interiit-winners/winners.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AquaticsComponent } from './pages/sports/aquatics/aquatics.component';
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
import { CoordinatorsComponent } from './pages/sports/socialmedia-co/coordinators.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { RepInfoCardComponent } from './components/rep-info-card/rep-info-card.component';
import { FacultyCardComponent } from './components/faculty-card/faculty-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    WinnersComponent,
    GalleryComponent,
    AquaticsComponent,
    AthleticsComponent,
    BadmintonComponent,
    BasketballComponent,
    ChessComponent,
    CricketComponent,
    FootballComponent,
    HockeyComponent,
    LawnTennisComponent,
    TableTennisComponent,
    VolleyballComponent,
    WeightliftingComponent,
    CoordinatorsComponent,
    PreloaderComponent,
    RepInfoCardComponent,
    FacultyCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
