import { Component, Input } from '@angular/core';

@Component({
  selector: 'shelf-content',
  templateUrl: './shelf-content.component.html',
  styleUrl: './shelf-content.component.scss',
})
export class ShelfContentComponent {
  @Input() movies: any;
}
