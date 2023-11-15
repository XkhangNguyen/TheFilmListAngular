import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubePlayerComponent } from '../youtube-player/youtube-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [YoutubePlayerComponent],
  imports: [CommonModule, YouTubePlayerModule],
  exports: [YoutubePlayerComponent],
})
export class SharedModule {}
