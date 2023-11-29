import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/components/shared-module/shared.module';
import { MovieComponent } from './movie.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [MovieComponent],
  imports: [CommonModule, SharedModule, CarouselModule],
})
export class MovieModule {}
