import { BookService } from './../services/book.service';
import { LocalstorageService } from '../services/localstorage.service';
import { BookComponent } from './book.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

describe('BookComponent', () => {
    let component: BookComponent;
    let service: BookService;
    let localStorageService: LocalstorageService;

    beforeEach(() => {
        service = new BookService(null);
        localStorageService = new LocalstorageService();
        component = new BookComponent(service, localStorageService);
    });

    it('#Book getBookList should return a list of books', () => {

        const books = '<?xml version="1.0" encoding="UTF-8"?> <GoodreadsResponse></GoodreadsResponse>';

        spyOn(localStorageService, 'getBooksLocal').and.callFake( () => {
            return Observable.from([ '<?xml version="1.0" encoding="UTF-8"?> <GoodreadsResponse></GoodreadsResponse>']);
        });
        spyOn(service, 'getBooks').and.callFake( () => {
            return Observable.from([ '<?xml version="1.0" encoding="UTF-8"?> <GoodreadsResponse></GoodreadsResponse>']);
        });

        component.getBookList();

        expect(component.books.value).toBe(books);

    });

    it('#Book the type should be book', () => {
        expect(component.type).toBe('book');
    });
});
