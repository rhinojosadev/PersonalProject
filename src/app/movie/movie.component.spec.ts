import { MovieComponent } from './movie.component';
import { LocalstorageService } from '../services/localstorage.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { MoviesService } from '../services/movies.service';

describe('MovieComponent', () => {
    let component: MovieComponent;
    let service: MoviesService;
    let localStorageService: LocalstorageService;

    beforeEach(() => {
        service = new MoviesService(null);
        localStorageService = new LocalstorageService();
        component = new MovieComponent(service, localStorageService);
    });

    it('#Movie getMovies should return a list of movies', () => {

        const movies = '{ "Title": "Star Wars: Episode IV - A New Hope", "Year": "1977","Rated": "PG"}';

        spyOn(localStorageService, 'getMoviesLocal').and.callFake( () => {
            return Observable.from([ '{ "Title": "Star Wars: Episode IV - A New Hope", "Year": "1977","Rated": "PG"}']);
        });
        spyOn(service, 'getMovies').and.callFake( () => {
            return Observable.from([ '{ "Title": "Star Wars: Episode IV - A New Hope", "Year": "1977","Rated": "PG"}']);
        });

        component.getMovieList();

        expect(component.movies.value).toBe(movies);

    });

    it('#Movie the type should be movie', () => {
        expect(component.type).toBe('movie');
    });
});
