import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.pug',
  styleUrls: ['../../sass/module/comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
  }

}
