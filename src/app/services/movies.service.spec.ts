
import { MoviesService } from './movies.service';

describe('MoviesService', () => {

    let httpClientSpy: { get: jasmine.Spy};
    let movieService: MoviesService;

    beforeEach(() => {
        // Todo: spy on other methods too
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        movieService = new MoviesService(<any> httpClientSpy);
      });

    it('Should return a list of movies', () => {
    });

});
