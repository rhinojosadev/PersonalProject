import { Injectable } from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';
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
    return this.db.list('/moviesComments', ref => ref.orderByChild('id').equalTo(id)).snapshotChanges();
  }

  deleteMovieCommentById(id: string) {
    this.moviesDbContext.remove(id);
  }

  updateMovieCommentById(id: string, value: string) {
    this.moviesDbContext.update(id, value);
  }


  selectBooksCommentById() {
    return this.booksDbContext.valueChanges();
  }

  insertBookComment(value: string) {
    return this.booksDbContext.push(value);
  }

  selectBookCommentsById(id: string) {
    return this.db.list('/booksComments', ref => ref.orderByChild('id').equalTo(id)).snapshotChanges();
  }

  updateBookCommentById(id: string, value: string) {
    this.booksDbContext.update(id, value);
  }

}
