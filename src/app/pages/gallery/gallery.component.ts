import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  indices = Array.from({ length: 15 }, (_, i) => i + 1);
  sources = this.indices.map((i) => `assets/img/gallery/img-${i}.jpg`);
}
