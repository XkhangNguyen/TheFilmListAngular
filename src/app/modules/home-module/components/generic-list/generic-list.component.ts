import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TmdbService } from 'src/app/core/services/TMDB/tmdb.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GenericListComponent implements OnInit {
  movies: any;

  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 10
      }
    },
    margin: 10,
    nav: true,
    navText: ['&#8249', '&#8250;'],
    dots: false,
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
