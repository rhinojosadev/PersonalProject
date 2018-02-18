import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentBooksComponent } from './comment-books.component';

describe('CommentBooksComponent', () => {
  let component: CommentBooksComponent;
  let fixture: ComponentFixture<CommentBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
