import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.pug',
  styleUrls: ['../../sass/module/card.component.scss']
})
export class CardComponent {
    @Input()  id: string;
    @Input()  title: string;
    @Input()  imageUrl: string;
    @Input()  stars?: string;


    constructor(private router: Router, private config: NgbRatingConfig) {
       // customize default values of ratings used by this component tree
       config.max = 5;
    }

    goToCommentSection() {
      this.router.navigate([this.router.url + '/comments/' + this.id]);
    }
}
