import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-comment-movies',
  templateUrl: './comment-movies.component.pug',
  styleUrls: ['../../sass/module/comment-movies.component.scss']
})
export class CommentMoviesComponent implements OnInit {

  movie;
  newPost: boolean;
  type = 'movie';

  constructor(private movieService: MoviesService, private localStorage: LocalstorageService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id   = this.route.snapshot.paramMap.get('id');
    this.getSingleMovie(id);
    this.newPost = false;
  }

  onClickNewPost() {
    this.newPost = true;
  }

  // TODO make call to API to save data
  saveMovieComments(model) {
    console.log(model);
  }

  getSingleMovie(id) {
    if (this.localStorage.getMovieLocalById(id) !== null) {
      this.movie = this.localStorage.getMovieLocalById(id);
      console.log(this.movie);
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
