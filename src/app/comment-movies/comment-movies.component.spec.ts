import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentMoviesComponent } from './comment-movies.component';

describe('CommentMoviesComponent', () => {
  let component: CommentMoviesComponent;
  let fixture: ComponentFixture<CommentMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
