import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubePlayerComponent } from '../youtube-player/youtube-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { HeaderPlaceholderComponent } from '../header-placeholder/header-placeholder.component';

@NgModule({
  declarations: [
    YoutubePlayerComponent,
    HeaderComponent,
    FooterComponent,
    MovieItemComponent,
    HeaderPlaceholderComponent,
  ],
  imports: [CommonModule, YouTubePlayerModule, FontAwesomeModule],
  exports: [
    YoutubePlayerComponent,
    HeaderComponent,
    FooterComponent,
    MovieItemComponent,
    HeaderPlaceholderComponent,
  ],
})
export class SharedModule {}
