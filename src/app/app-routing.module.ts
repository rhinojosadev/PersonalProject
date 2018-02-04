import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './movie/movie.component';
import { BookComponent } from './book/book.component';
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes: Routes = [
    { path: 'movies',  component: MovieComponent },
    { path: 'books',     component: BookComponent },
    { path: '',   redirectTo: '/movies', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })

  export class AppRoutingModule {}
