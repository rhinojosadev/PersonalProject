import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostReviewComponent } from './post-review.component';

describe('PostReviewComponent', () => {
    let component: PostReviewComponent;

    beforeEach(() => {
        component = new PostReviewComponent();
    });

    it('#PostReview should emit a review to movie if its a movie', () => {
        component.type = 'movie';

        spyOn(component.onSubmitReviewMovie, 'emit');

        component.onSubmitReview();

        expect(component.onSubmitReviewMovie.emit).toHaveBeenCalled();
    });

    it('#PostReview should emit a review to book if its a book', () => {
        component.type = 'book';

        spyOn(component.onSubmitReviewBook, 'emit');

        component.onSubmitReview();

        expect(component.onSubmitReviewBook.emit).toHaveBeenCalled();
    });
});
