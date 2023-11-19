import { Component, Input, ViewChild } from '@angular/core';
import { OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  @Input() movies: any;
  @Input() tag: string = '';

  @ViewChild('carousel')
  carousel!: CarouselComponent;

  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: false,
    items: 5,
    dots: false,
    margin: 0,
  };

  moveToNextSlide() {
    this.carousel.next();
  }

  moveToPrevSlide() {
    this.carousel.prev();
  }
}
