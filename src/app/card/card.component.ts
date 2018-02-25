import { FirebaseService } from './../services/firebase.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import _ = require('lodash');
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.pug',
  styleUrls: ['../../sass/module/card.component.scss']
})
export class CardComponent implements OnInit {
    @Input()  id: string;
    @Input()  title: string;
    @Input()  imageUrl: string;
    @Input()  type?: string;

    generalReviewStars: number;
    posts: Observable<any[]>;


    constructor(private router: Router, private config: NgbRatingConfig, private firebasService: FirebaseService) {
       // customize default values of ratings used by this component tree
       config.max = 5;
    }

    ngOnInit() {
      switch (this.type) {
        case 'movie':
        this.posts =  this.firebasService.selectMovieCommentsById(this.id)
                                          .map(changes => {
                        return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
                      });
        this.posts
                  .subscribe (response => {
                    if (!_.isEmpty(response)) {
                      this.generalReviewStars = (_.floor(_.meanBy( response, 'value.rate')));
                    }
        });
        break;
      }
    }
    goToCommentSection() {
      this.router.navigate([this.router.url + '/comments/' + this.id]);
    }
}
