import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rep-info-card',
  templateUrl: './rep-info-card.component.html',
  styleUrls: ['./rep-info-card.component.css'],
})
export class RepInfoCardComponent {
  @Input() name: string | undefined;
  @Input() contact: string | undefined;
  @Input() mail: string | undefined;
  @Input() linkedin: string | undefined;
  @Input() position: string | undefined;
}
