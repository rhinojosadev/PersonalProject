import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  constructor() { }

  insertBooksLocal(value) {
    localStorage.setItem('books', value);
  }

  insertMoviesLocal(value) {
    localStorage.setItem('movies', value);
  }

  insertIndividualMovie(value, id) {
    localStorage.setItem(id, value);
  }

  getMovieLocalById(id) {
    return JSON.parse(localStorage.getItem(id));
  }

  getBooksLocal() {
   return JSON.parse(localStorage.getItem('books'));
  }

  getMoviesLocal() {
    return JSON.parse(localStorage.getItem('movies'));
  }

}
