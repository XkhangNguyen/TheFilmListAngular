import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { TmdbService } from 'src/app/core/services/TMDB/tmdb.service';
import { OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GenericListComponent implements OnInit {
  movies: any;

  @ViewChild('carousel') 
  carousel! : CarouselComponent;
  
  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: false,
    items:1,
    dots: false,
    margin: 0,
  }
  
  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.fetchTrendingMovies();
  }

  fetchTrendingMovies() {
    this.tmdbService.getTrendingMovies().subscribe(
      (res: any) => {
        this.movies = res.results;
      }
    );
  }

  fetchTrailer(id: number): Observable<string | undefined> {
    return this.tmdbService.getMovieVideos(id).pipe(
      map((res: any) => {
        const videos = res.results;
        const trailerVideo = videos.find((video: any) => video.type === "Trailer");
        return trailerVideo ? trailerVideo.key : undefined;
      })
    );
  }

  moveToNextSlide() {
    this.carousel.next();
  }

  moveToPrevSlide() {
    this.carousel.prev();
  }
}
