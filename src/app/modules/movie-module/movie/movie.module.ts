import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/components/shared-module/shared.module';
import { MovieComponent } from './movie.component';

@NgModule({
  declarations: [MovieComponent],
  imports: [CommonModule, SharedModule],
})
export class MovieModule {}
