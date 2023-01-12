import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagVideosComponent } from './tag-videos.component';

describe('TagVideosComponent', () => {
  let component: TagVideosComponent;
  let fixture: ComponentFixture<TagVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
