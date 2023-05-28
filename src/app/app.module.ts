import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
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
import { PreloaderComponent } from './components/preloader/preloader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    GalleryComponent,
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
    PreloaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
