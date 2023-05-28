import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'bosa-website';

  isLoading: boolean = true;

  loaded = 0;

  loadImages() {
    for (let i = 1; i <= 15; i++) {
      let img = new Image();
      img.onload = () => {
        this.load();
      };
      img.src = 'assets/img/gallery/img-'.concat(i.toString()).concat('.jpg');
    }
  }

  load() {
    this.loaded++;
    if (15 == this.loaded) {
      this.isLoading = false;
    }
  }

  ngOnInit(): void {
    Aos.init();
    this.loadImages();
  }
}
