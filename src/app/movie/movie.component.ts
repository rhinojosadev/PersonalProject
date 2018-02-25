import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../services/localstorage.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.pug',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movies;
  type = 'movie';

  constructor(private service: MoviesService, private localStorage: LocalstorageService) { }

  ngOnInit() {
   this.getMovieList();
  }

  getMovieList() {
    if (this.localStorage.getMoviesLocal() !== null) {
      this.movies = this.localStorage.getMoviesLocal();
    } else {
      this.service
          .getMovies()
          .subscribe(response => {
            this.movies = response.json();
            this.localStorage.insertMoviesLocal(JSON.stringify(this.movies));
          }, error => {
             console.log('Unexpected error ocurred');
          });
    }
  }

}
