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
import { CommentMoviesComponent } from './comment-movies/comment-movies.component';
import { CommentBooksComponent } from './comment-books/comment-books.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieComponent,
    BookComponent,
    NotFoundComponent,
    CardComponent,
    CommentMoviesComponent,
    CommentBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgCircleProgressModule.forRoot({
      showInnerStroke: false,
      showSubtitle: false,
      showUnits: false,
      unitsColor: '#fff',
      titleColor: '#fff',
      subtitleColor: '#fff',
      unitsFontSize: '16',
      radius: 80,
      outerStrokeWidth: 18,
      outerStrokeColor: '#FAE906',
      animationDuration: 300,
    })
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
