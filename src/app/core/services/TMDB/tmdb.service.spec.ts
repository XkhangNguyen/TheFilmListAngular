import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TmdbService } from './tmdb.service';

describe('TmdbService', () => {
  let service: TmdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TmdbService],
    });
    service = TestBed.inject(TmdbService);
  });

  it('should return a 200 status code', fakeAsync(
    inject(
      [TmdbService, HttpTestingController],
      (httpMock: HttpTestingController) => {
        service.getTrendingMovies().subscribe((response) => {
          expect(response).toBeTruthy();
        });

        const req = httpMock.expectOne((request) =>
          request.url.includes('/discover/movie')
        );

        expect(req.request.method).toEqual('GET');

        req.flush({}, { status: 200, statusText: 'OK' });

        tick();

        httpMock.verify();
      }
    )
  ));
});
