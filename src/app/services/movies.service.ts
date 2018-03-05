import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MoviesService {

  private url = 'http://www.omdbapi.com/';
  private searchQuery = '?s=Star+Wars&';
  private searchById = '?i=';
  private key = '16732e5e';

  private urlGetMovies = this.url + this.searchQuery + 'apikey=' + this.key;
  private urlGetMovieById  = this.url + this.searchById;

  constructor(private http: Http) { }

  getMovies() {
    return this.http.get(this.urlGetMovies);
  }

  getMovieById(id) {
    return this.http.get(this.urlGetMovieById + id + '&apikey=' + this.key);
  }

}
