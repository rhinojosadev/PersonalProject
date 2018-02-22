import { Component, OnInit, Input } from '@angular/core';
import { PostReview } from '../post-review/post-review';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.pug',
  styleUrls: ['../../sass/module/post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  @Input() post: PostReview;

  constructor() { }

  ngOnInit() {
  }

}
