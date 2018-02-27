import { ModalReviewComponent } from './../modal-review/modal-review.component';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PostReview } from '../post-review/post-review';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.pug',
  styleUrls: ['../../sass/module/post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  @Input() post: PostReview;
  @Input() uniqueId: string;
  @Input() modal: ModalReviewComponent;
  @Input() type: string;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  onClickDelete() {
    if (window.confirm('Are you sure you want to delete this comment?')) {

      switch (this.type) {
        case 'book':
          this.firebaseService.deleteBookCommentById(this.uniqueId);
        break;
        case 'movie':
          this.firebaseService.deleteMovieCommentById(this.uniqueId);
        break;
      }
    }
  }

  onClickEdit(post: PostReview) {
    this.modal.openModal(post, this.uniqueId);
  }

}
