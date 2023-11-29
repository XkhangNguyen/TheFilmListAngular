import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MovieListComponent {
  @Input() movies: any;
  @Input() tag: string = '';
  @Input() tagColor: string = 'yelow';

  @ViewChild('carousel')
  carousel!: CarouselComponent;

  carouselOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: false,
    items: 6,
    dots: true,
    margin: 0,
    slideBy: 6,
    navSpeed: 120,
  };

  moveToNextSlide() {
    this.carousel.next();
  }

  moveToPrevSlide() {
    this.carousel.prev();
  }

  getDynamicStyle() {
    return {
      'text-shadow': `0 0 10px ${this.tagColor}, 0 0 20px ${this.tagColor}`,
    };
  }
}
