import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {

  constructor(private db: AngularFireDatabase) {}

  private moviesDbContext = this.db.list('moviesComments');
  private booksDbContext  = this.db.list('booksComments');

  getMoviesComments() {
    return this.moviesDbContext.valueChanges();
  }

  getBooksComments() {
    return this.booksDbContext.valueChanges();
  }

  insertMovieComment(value: JSON) {
    return this.moviesDbContext.push(value);
  }

}
