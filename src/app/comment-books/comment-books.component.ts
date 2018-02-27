import { LocalstorageService } from './../services/localstorage.service';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalReviewComponent } from '../modal-review/modal-review.component';
import { PostReview } from '../post-review/post-review';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import _ = require('lodash');

@Component({
  selector: 'app-comment-books',
  templateUrl: './comment-books.component.pug',
  styleUrls: ['../../sass/module/comment-books.component.scss']
})
export class CommentBooksComponent implements OnInit {

  generalReviewStars: number;
  isRecommendedAvaliable: boolean;
  percentageRecomendeded: number;
  selectedBook;
  id: string = this.route.snapshot.paramMap.get('id');
  type = 'book';
  posts: Observable<any[]>;

  @ViewChild(ModalReviewComponent) modalReview: ModalReviewComponent;

  constructor(private localStorageService: LocalstorageService, private route: ActivatedRoute, private firebaseService: FirebaseService,
              private rateConfig: NgbRatingConfig) {
                rateConfig.max = 5;
              }

  ngOnInit() {
    this.getSingleBook(this.id);

    this.posts = this.firebaseService.selectBookCommentsById(this.id)
                                      .map(changes => {
                                        return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
                                      });

    this.posts
              .subscribe(response => {
                if (!_.isEmpty(response)) {
                  this.isRecommendedAvaliable = true;
                  const howManyRecommendThis = _.filter(response, ['value.isrecommended', 'true' ]).length;
                  this.percentageRecomendeded = (100 / (response.length / howManyRecommendThis ));
                  this.generalReviewStars = (_.floor(_.meanBy(response, 'value.rate')));
                } else {
                  this.isRecommendedAvaliable = false;
                }
            });
  }

  onClickNewPost() {
    this.modalReview.openModal();
  }

  saveBookComments(model: PostReview) {
    model.id  = this.id;
    this.firebaseService.insertBookComment(JSON.parse(JSON.stringify(model)));
  }

  getSingleBook(id) {
    this.selectedBook = this.localStorageService.getBookLocalById(this.id);
  }

}
