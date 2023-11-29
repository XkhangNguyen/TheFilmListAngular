import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss',
})
export class MovieItemComponent implements OnChanges {
  @Input() movie: any;

  pathToMovie: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['movie'] && changes['movie'].currentValue) {
      this.pathToMovie = '/movie/' + this.movie.id;
    }
  }
}
