import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  onClickDelete() {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      this.firebaseService.deleteMovieCommentById(this.uniqueId);
    }
  }

}
