import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GenericListComponent } from '../components/generic-list/generic-list.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from 'src/app/shared/components/shared-module/shared.module';

@NgModule({
  declarations: [HomeComponent, GenericListComponent],
  imports: [CommonModule, CarouselModule, SharedModule],
})
export class HomeModule {}
