import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home-module/home/home.component';
import { ShelfComponent } from './modules/shelf-module/shelf/shelf.component';
import { MovieComponent } from './modules/movie-module/movie/movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shelf', component: ShelfComponent },
  { path: 'movie/:id', component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
