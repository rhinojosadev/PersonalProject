import { PostReview } from './../post-review/post-review';
import { FirebaseService } from './../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { LocalstorageService } from '../services/localstorage.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-comment-movies',
  templateUrl: './comment-movies.component.pug',
  styleUrls: ['../../sass/module/comment-movies.component.scss']
})
export class CommentMoviesComponent implements OnInit {

  movie: Object;
  newPost: boolean;
  type = 'movie';
  posts: Object;
  id: string = this.route.snapshot.paramMap.get('id');

  constructor(private movieService: MoviesService, private localStorage: LocalstorageService, private route: ActivatedRoute,
              private firebaseService: FirebaseService, private config: NgbRatingConfig) {
                  // customize default values of ratings used by this component tree
                    config.max = 5;
              }

  ngOnInit() {
    this.getSingleMovie(this.id);
    this.newPost = false;
    this.firebaseService.selectMovieCommentsById(this.id)
                        .subscribe( result => { console.dir(result); this.posts = result; });
  }

  onClickNewPost() {
    this.newPost = true;
  }

  saveMovieComments(model: PostReview) {
    this.firebaseService.insertMovieComment(JSON.parse(JSON.stringify(model)));
    this.newPost = false;
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
