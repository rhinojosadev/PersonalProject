import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  constructor() { }

  insertMoviesLocal(value) {
    localStorage.setItem('movies', value);
  }

  insertIndividualMovie(value, id) {
    localStorage.setItem(id, value);
  }

  getMovieLocalById(id) {
    return JSON.parse(localStorage.getItem(id));
  }

  getMoviesLocal() {
    return JSON.parse(localStorage.getItem('movies'));
  }

  insertBooksLocal(value) {
    localStorage.setItem('books', value);
  }

  getBooksLocal() {
   return JSON.parse(localStorage.getItem('books'));
  }

  getBookLocalById(id) {
   const books =  JSON.parse(localStorage.getItem('books'));
   let selectedBook: any;
   books.forEach(function (value, key) {
      if (value['elements'][0]['elements'][0]['text'] === id) {
         selectedBook = value['elements'];
         return;
      }
   });
   return selectedBook;
  }



}
