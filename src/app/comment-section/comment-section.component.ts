import { LocalstorageService } from './../services/localstorage.service';
import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.pug',
  styleUrls: ['../../sass/module/comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {

  movie;

  constructor(private router: Router, private route: ActivatedRoute, private movieService: MoviesService,
              private localStorage: LocalstorageService) { }

  ngOnInit() {
    const id   = this.route.snapshot.paramMap.get('id');
    const type = this.router.url.split('/')[1];
    this.getSectionInfoByType(type, id);
  }

  getSectionInfoByType(type, id) {
    switch (type) {
      case SectionType.Movie:
         this.getSingleMovie(id);
      break;
      /*case SectionType.Book:
        getBookInfo();
      break;*/
    }
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


export abstract class SectionType {
  public static Movie = 'movies';
  public static Book = 'books';
  constructor() {}
}
