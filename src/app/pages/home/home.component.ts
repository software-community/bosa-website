import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  carousel_index: string = 'F';
  interval_about: any;

  ngOnInit(): void {
    this.interval_about = setInterval(() => {
      this.carouselNext();
    }, 5000);
  }

  carouselNext() {
    const button = document.getElementById(this.carousel_index);
    button?.click();
    if (this.carousel_index === 'F') {
      this.carousel_index = 'G';
    } else if (this.carousel_index === 'G') {
      this.carousel_index = 'H';
    } else if (this.carousel_index === 'H') {
      this.carousel_index = 'I';
    } else if (this.carousel_index === 'I') {
      this.carousel_index = 'F';
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval_about);
  }
}
