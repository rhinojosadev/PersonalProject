import { LocalstorageService } from './../services/localstorage.service';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalReviewComponent } from '../modal-review/modal-review.component';
import { PostReview } from '../post-review/post-review';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-comment-books',
  templateUrl: './comment-books.component.pug',
  styleUrls: ['../../sass/module/comment-books.component.scss']
})
export class CommentBooksComponent implements OnInit {

  isRecommendedAvaliable = false;
  selectedBook;
  id: string = this.route.snapshot.paramMap.get('id');
  type = 'book';
  @ViewChild(ModalReviewComponent) modalReview: ModalReviewComponent;

  constructor(private localStorageService: LocalstorageService, private route: ActivatedRoute, private firebaseService: FirebaseService,  
              private rateConfig: NgbRatingConfig) {
                rateConfig.max = 5;
              }

  ngOnInit() {
    this.selectedBook = this.localStorageService.getBookLocalById(this.id);
  }

  onClickNewPost() {
    this.modalReview.openModal();
  }

  saveBookComments(model: PostReview) {
    model.id  = this.id;
    this.firebaseService.insertBookComment(JSON.parse(JSON.stringify(model)));
  }

}
