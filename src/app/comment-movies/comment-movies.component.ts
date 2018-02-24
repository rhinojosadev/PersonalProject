import { PostReview } from './../post-review/post-review';
import { FirebaseService } from './../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { LocalstorageService } from '../services/localstorage.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ModalReviewComponent } from '../modal-review/modal-review.component';
import _ = require('lodash');
import { PostReviewViewModel } from '../post-review/pos-review-vm';

@Component({
  selector: 'app-comment-movies',
  templateUrl: './comment-movies.component.pug',
  styleUrls: ['../../sass/module/comment-movies.component.scss']
})
export class CommentMoviesComponent implements OnInit {

  movie: Object;
  newPost: boolean;
  type = 'movie';
  posts: Observable<any[]>;
  id: string = this.route.snapshot.paramMap.get('id');

  @ViewChild(ModalReviewComponent) modalReview: ModalReviewComponent;

  constructor(private movieService: MoviesService, private localStorage: LocalstorageService, private route: ActivatedRoute,
              private firebaseService: FirebaseService, private config: NgbRatingConfig) {
                  // customize default values of ratings used by this component tree
                    config.max = 5;
              }

  ngOnInit() {
    this.getSingleMovie(this.id);
    this.newPost = false;
    this.posts = this.firebaseService.selectMovieCommentsById(this.id)
                        .map(changes => {
                          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
                        });
  }

  onClickNewPost() {
    this.modalReview.openModal();
  }

  saveMovieComments(model: PostReview) {
      model.id  = this.id;
      this.firebaseService.insertMovieComment(JSON.parse(JSON.stringify(model)));
  }

  editMovieComments(model: PostReviewViewModel) {
    const newModel = new PostReview();
    newModel.id = model.id;
    newModel.description = model.description;
    newModel.isrecommended = model.isrecommended;
    newModel.rate = model.rate;
    newModel.title = model.title;
    newModel.username = model.username;

    this.firebaseService.updateMovieCommentById(model.uniqueId, JSON.parse(JSON.stringify(newModel)));
  }

  getSingleMovie(id) {
    if (this.localStorage.getMovieLocalById(id) !== null) {
      this.movie = this.localStorage.getMovieLocalById(id);
    } else {
      this.movieService.getMovieById(id).subscribe(response => {
        this.movie = response.json();
        this.localStorage.insertIndividualMovie(JSON.stringify(this.movie), id);
      }, error => {
        console.log('Unexpected error ocurred');
     });
    }
  }

}
