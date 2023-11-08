import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';
import { TmdbService } from 'src/app/core/services/TMDB/tmdb.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss']
})
export class GenericListComponent implements OnInit {
  movies: any;

  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    items: 10,
    margin: 10,
  }
  
  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.fetchTrendingMovies();
  }

  fetchTrendingMovies() {
    const pageNumber = 1;

    this.tmdbService.getTrendingMovies(pageNumber).subscribe(
      (res: any) => {
        this.movies = res.results;
      }
    );
  }
}
