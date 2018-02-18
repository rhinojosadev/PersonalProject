import { CommentSectionComponent } from './comment-section/comment-section.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './movie/movie.component';
import { BookComponent } from './book/book.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommentMoviesComponent } from './comment-movies/comment-movies.component';
import { CommentBooksComponent } from './comment-books/comment-books.component';


const appRoutes: Routes = [
    { path: 'movies',
         children: [
          { path: '', component: MovieComponent},
          { path: 'comments/:id', component: CommentMoviesComponent },
         ]
    },
    { path: 'books',
        children: [
          { path: '', component: BookComponent},
          { path: 'comments/:id', component: CommentBooksComponent },
        ]
    },
    { path: '',   redirectTo: '/movies', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })

  export class AppRoutingModule {}
