// Angular import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Third-party import

// Local import
import { AppRoutingModule } from './app-routing.module';
import { ErrorHandlerService } from './core/services/error-handler/error-handler.service';
import { HomeModule } from './modules/home-module/home/home.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/components/shared-module/shared.module';
import { MovieModule } from './modules/movie-module/movie/movie.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomeModule,
    MovieModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
