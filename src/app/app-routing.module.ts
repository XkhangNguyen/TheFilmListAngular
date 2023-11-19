import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home-module/home/home.component';
import { MovieComponent } from './modules/movie-module/movie/movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie', component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
