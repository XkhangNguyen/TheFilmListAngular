import { Component } from '@angular/core';
import { TmdbService } from 'src/app/core/services/TMDB/tmdb.service';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrl: './shelf.component.scss',
})
export class ShelfComponent {
  movies: any;
  pageNumber: number = 1;

  constructor(private tmdbService: TmdbService) {}

  ngOnInit() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.tmdbService.getMoviesShelf(this.pageNumber).subscribe((res: any) => {
      this.movies = res.results;
    });
  }
}
