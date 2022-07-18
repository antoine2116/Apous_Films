import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieComponent } from './movies/movie/movie.component';
import {HttpClientModule} from "@angular/common/http";
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { PaginationComponent } from './tools/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieListComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
