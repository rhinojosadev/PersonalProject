import { LocalstorageService } from './../services/localstorage.service';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-books',
  templateUrl: './comment-books.component.pug',
  styleUrls: ['../../sass/module/comment-books.component.scss']
})
export class CommentBooksComponent implements OnInit {

  constructor(private localStorageService: LocalstorageService, private route: ActivatedRoute) { }
  isRecommendedAvaliable = false;
  selectedBook;
  id: string = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    this.selectedBook = this.localStorageService.getBookLocalById(this.id);
  }

}
