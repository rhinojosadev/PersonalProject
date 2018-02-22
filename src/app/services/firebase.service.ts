import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {

  constructor(private db: AngularFireDatabase) {}

  private moviesDbContext = this.db.list('moviesComments');
  private booksDbContext  = this.db.list('booksComments');


  insertMovieComment(value: string) {
    return this.moviesDbContext.push(value);
  }

  selectMovieCommentsById(id: string) {
    return this.db.list('/moviesComments', ref => ref.orderByChild('id').equalTo(id)).valueChanges();
  }

  deleteMovieCommentById(id: string) {
    this.db.list('/moviesComments', ref => ref.orderByChild('id').equalTo(id)).remove();
  }

  updateMovieCommentById(id: string, value: string) {
    this.deleteMovieCommentById(id);
    this.insertMovieComment(value);
  }

  selectBooksCommentById() {
    return this.booksDbContext.valueChanges();
  }

}
