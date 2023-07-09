import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faculty-card',
  templateUrl: './faculty-card.component.html',
  styleUrls: ['./faculty-card.component.css'],
})
export class FacultyCardComponent {
  @Input() img: string | undefined;
  @Input() name: string | undefined;
  @Input() position: string | undefined;
}
