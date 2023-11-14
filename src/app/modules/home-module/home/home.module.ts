import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GenericListComponent } from '../components/generic-list/generic-list.component';
import { YoutubePlayerComponent } from '../components/youtube-player/youtube-player.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [HomeComponent, GenericListComponent, YoutubePlayerComponent],
  imports: [CommonModule, CarouselModule, YouTubePlayerModule],
})
export class HomeModule {}
