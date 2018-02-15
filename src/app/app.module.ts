import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieComponent } from './movie/movie.component';
import { BookComponent } from './book/book.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookService } from './services/book.service';
import { CardComponent } from './card/card.component';
import { LocalstorageService } from './services/localstorage.service';
import { MoviesService } from './services/movies.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieComponent,
    BookComponent,
    NotFoundComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers:
  [
    BookService,
    MoviesService,
    LocalstorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
