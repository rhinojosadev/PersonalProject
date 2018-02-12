import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { xml2json } from 'xml-js';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.pug',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books;


  constructor(private service: BookService) { }

  
  ngOnInit() {
    this.getBookList();
  }

   getBookList() {
    this.service.getBooks()
    .subscribe(response => {
        const xml = response.text();
        this.books = JSON.parse(xml2json(xml));
    }, error => {
      console.log('Unexpected error ocurred');
    });
  }

}
