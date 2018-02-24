import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PostReview } from './post-review';
import _ = require('lodash');

@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.pug',
  styleUrls: ['../../sass/module/post-review.component.scss']
})
export class PostReviewComponent implements OnInit {

  @Input() type: string;
  @Input() initModel?: PostReview;
  @Output() onSubmitReviewMovie: EventEmitter<PostReview> = new EventEmitter<PostReview>();
  onSubmitReviewBook: EventEmitter<PostReview> = new EventEmitter<PostReview>();
  model = new PostReview();

  constructor() {}

  ngOnInit() {
    if (!_.isEmpty(this.initModel)) {
      this.model.description = this.initModel.description;
      this.model.id = this.initModel.id;
      this.model.isrecommended = this.initModel.isrecommended;
      this.model.rate = this.initModel.rate;
      this.model.title = this.initModel.title;
      this.model.username = this.initModel.username;
    }
  }

  onSubmitReview() {
     switch (this.type) {
       case 'movie':
          this.onSubmitReviewMovie.emit(this.model);
       break;
       case 'book':
          this.onSubmitReviewBook.emit(this.model);
       break;
     }

  }

}
