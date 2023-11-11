import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable, map } from 'rxjs';
import { Movie } from '../../models/movie';

interface TmdbApiResponse {
  results: Movie[];
}

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private apiKey = environment.tmdbApiKey;
  private apiUrl = environment.tmdbApiBaseUrl;

  constructor(private http: HttpClient) {}

  getTrendingMovies(pageNumber: number): Observable<any> {
    const endpoint = '/discover/movie';
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('include_adult', true)
      .set('include_video', false)
      .set('language', 'en-US')
      .set('sort_by', 'popularity.desc')
      .set('page', pageNumber);
    return this.http.get<TmdbApiResponse>(`${this.apiUrl}${endpoint}`, {
      params,
    });
  }

  getUpcomingMovies(): Observable<any> {
    const endpoint = '/movie/upcoming';
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get<TmdbApiResponse>(`${this.apiUrl}${endpoint}`, {
      params,
    });
  }

  getNowPlayingMovies(): Observable<any> {
    const endpoint = '/movie/now_playing';
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get<TmdbApiResponse>(`${this.apiUrl}${endpoint}`, {
      params,
    });
  }

  getTopRatedMovies(pageNumber: number): Observable<any> {
    const endpoint = '/discover/movie';
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('include_adult', true)
      .set('include_video', false)
      .set('language', 'en-US')
      .set('sort_by', 'pvote_average.desc')
      .set('without_genres', '99,10755')
      .set('vote_count.gte', '200')
      .set('page', pageNumber);
    return this.http.get<TmdbApiResponse>(`${this.apiUrl}${endpoint}`, {
      params,
    });
  }
}
