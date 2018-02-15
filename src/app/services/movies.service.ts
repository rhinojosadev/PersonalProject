import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MoviesService {

  private url = 'http://www.omdbapi.com/';
  private searchQuery = '?s=Star+Wars&';
  private key = 'KEY HERE';

  private urlGetMovies = this.url + this.searchQuery + 'apikey=' + this.key;

  constructor(private http: Http) { }

  getMovies() {
    return this.http.get(this.urlGetMovies);
  }

}
