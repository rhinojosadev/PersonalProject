import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { xml2json } from 'xml-js';
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.pug',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books;

  constructor(private service: BookService, private localStorage: LocalstorageService) { }

  ngOnInit() {
    this.getBookList();
  }

   getBookList() {
    if (this.localStorage.getBooksLocal() !== null) {
      this.books = this.localStorage.getBooksLocal();
    } else {
      this.service
        .getBooks()
        .subscribe(response => {
          const xml = response.text();
          this.books = JSON.parse(xml2json(xml));
          this.localStorage.insertBooksLocal( JSON.stringify(this.books));
        }, error => {
          console.log('Unexpected error ocurred');
        });
    }
  }

}
