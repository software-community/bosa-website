import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  indices = Array.from({ length: 21 }, (_, i) => i + 1);

  getImageSource(i: number): string {
    return `assets/img/gallery/img-${i}.jpg`;
  }
  openImage(i: number) {
    window.open(`assets/img/gallery/img-${i}.jpg`, '_blank');
  }
  // sources = this.indices.map((i) => `assets/img/gallery/img-${i}.jpg`);
}
