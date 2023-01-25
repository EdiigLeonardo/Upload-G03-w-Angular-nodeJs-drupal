import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentCanalComponent } from './post-comment-canal.component';

describe('PostCommentCanalComponent', () => {
  let component: PostCommentCanalComponent;
  let fixture: ComponentFixture<PostCommentCanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCommentCanalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCommentCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
