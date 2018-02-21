import { environment } from './../environments/environment';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PostReviewComponent } from './post-review/post-review.component';
import { FirebaseService } from './services/firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieComponent,
    BookComponent,
    NotFoundComponent,
    CardComponent,
    CommentMoviesComponent,
    CommentBooksComponent,
    PostReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
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
    }),
    NgbModule.forRoot(),
  ],
  providers:
  [
    BookService,
    MoviesService,
    LocalstorageService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
