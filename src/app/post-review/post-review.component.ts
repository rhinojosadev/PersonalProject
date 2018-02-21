import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PostReview } from './post-review';

@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.pug',
  styleUrls: ['../../sass/module/post-review.component.scss']
})
export class PostReviewComponent implements OnInit {

  @Input() title: string;
  @Input() type: string;
  @Output() onSubmitReviewMovie: EventEmitter<PostReview> = new EventEmitter<PostReview>();
  onSubmitReviewBook: EventEmitter<PostReview> = new EventEmitter<PostReview>();
  model = new PostReview();

  constructor() { }

  ngOnInit() {}

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
