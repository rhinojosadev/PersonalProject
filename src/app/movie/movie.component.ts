import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.pug',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private service: BookService ) { }

  ngOnInit() {
    this.service.getBooks()
    .subscribe(response => {
        console.log(response);
    }, error => {
      console.log('Unexpected error ocurred');
    });
  }

}
