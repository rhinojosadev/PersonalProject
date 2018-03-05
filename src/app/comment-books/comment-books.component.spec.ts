import { CommentBooksComponent } from './comment-books.component';
import { LocalstorageService } from './../services/localstorage.service';
import { FirebaseService } from './../services/firebase.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

describe('CommentBooksComponent', () => {
   /* let component: CommentBooksComponent;
    let rateConfig: NgbRatingConfig;
    let route: ActivatedRoute;
    let firebaseDb: AngularFireDatabase;
    let fireBaseService: FirebaseService;
    let localStorageService: LocalstorageService;

    beforeEach(() => {
        localStorageService = new LocalstorageService();
        route = new ActivatedRoute();
        firebaseDb = new AngularFireDatabase(null);
        fireBaseService = new FirebaseService(firebaseDb);
        rateConfig = new NgbRatingConfig();
        component = new CommentBooksComponent(localStorageService, route, fireBaseService, rateConfig);
    });

    it('#CommentBooks should get a single book', () => {

       const singleBook = '<?xml version="1.0" encoding="UTF-8"?> <GoodreadsResponse></GoodreadsResponse>';

        const spy = spyOn(localStorageService, 'getBookLocalById').and.callFake( () => {
            return '<?xml version="1.0" encoding="UTF-8"?> <GoodreadsResponse></GoodreadsResponse>';
        });

        //component.getSingleBook(0);

        expect(spy).toHaveBeenCalled();

    });  */
});
