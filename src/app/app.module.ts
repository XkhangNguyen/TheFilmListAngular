import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home-module/components/home/home.component';
import { GenericListComponent } from './modules/home-module/components/generic-list/generic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenericListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
