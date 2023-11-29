import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { TmdbService } from 'src/app/core/services/TMDB/tmdb.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { LockScrollService } from 'src/app/core/services/lock-scroll/lock-scroll.service';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MovieComponent {
  movie: any;
  id!: string;
  trailerVideoID: string | undefined;
  showYoutubePlayer = false;

  @ViewChild('carousel')
  carousel!: CarouselComponent;

  carouselOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: false,
    items: 7,
    dots: false,
    margin: 0,
    slideBy: 7,
    navSpeed: 75,
  };

  constructor(
    private tmdbService: TmdbService,
    private lockScrollService: LockScrollService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      this.fetchMovieDetails();
      this.getTrailerVideoKey(this.id).subscribe(
        (videoKey: string | undefined) => {
          this.trailerVideoID = videoKey;
        }
      );
    });
  }

  fetchMovieDetails() {
    this.tmdbService.getMovieDetails(this.id).subscribe((res: any) => {
      this.movie = res;
    });
  }

  getTrailerVideoKey(id: string): Observable<string | undefined> {
    return this.tmdbService.getMovieVideos(id).pipe(
      map((res: any) => {
        const videos = res.results;
        const trailerVideo = videos.find(
          (video: any) => video.type === 'Trailer'
        );
        return trailerVideo ? trailerVideo.key : undefined;
      })
    );
  }

  openYoutubePlayer(movieId: string) {
    this.lockScrollService.lockScroll();
    this.getTrailerVideoKey(movieId).subscribe(
      (videoKey: string | undefined) => {
        this.trailerVideoID = videoKey;
        this.showYoutubePlayer = true;
      }
    );
  }

  onOutsideClick() {
    this.showYoutubePlayer = false;
    this.lockScrollService.unlockScroll();
  }

  convertToHoursAndMinutes(runtime: number): string {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return `${hours}h${minutes}m`;
  }

  getCastWithLimit(limit: number) {
    return this.movie.credits.cast.slice(0, limit);
  }

  moveToNextSlide() {
    this.carousel.next();
  }

  moveToPrevSlide() {
    this.carousel.prev();
  }
}
