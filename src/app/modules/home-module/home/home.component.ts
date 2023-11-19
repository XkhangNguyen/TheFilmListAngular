import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/core/services/TMDB/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  upcomingMovies: any;
  nowPlayingMovies: any;
  topRatedMovies: any;

  constructor(private tmdbService: TmdbService) {}

  ngOnInit() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.tmdbService.getTopRatedMovies().subscribe((res: any) => {
      this.topRatedMovies = res.results;
    });
    this.tmdbService.getNowPlayingMovies().subscribe((res: any) => {
      this.nowPlayingMovies = res.results;
    });
    this.tmdbService.getUpcomingMovies().subscribe((res: any) => {
      this.upcomingMovies = res.results;
    });
  }
}
