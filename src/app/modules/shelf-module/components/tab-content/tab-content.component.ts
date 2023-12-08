import { Component, Input } from '@angular/core';
@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrl: './tab-content.component.scss',
})
export class TabContentComponent {
  @Input() movies: any;
}
