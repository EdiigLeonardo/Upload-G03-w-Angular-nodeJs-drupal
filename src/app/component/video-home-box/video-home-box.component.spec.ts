import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHomeBoxComponent } from './video-home-box.component';

describe('VideoHomeBoxComponent', () => {
  let component: VideoHomeBoxComponent;
  let fixture: ComponentFixture<VideoHomeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoHomeBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoHomeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
