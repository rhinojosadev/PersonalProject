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

  getBooksLocal() {
   return JSON.parse(localStorage.getItem('books'));
  }

  getMoviesLocal() {
    return JSON.parse(localStorage.getItem('movies'));
  }

}
