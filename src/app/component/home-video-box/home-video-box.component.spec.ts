import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVideoBoxComponent } from './home-video-box.component';

describe('HomeVideoBoxComponent', () => {
  let component: HomeVideoBoxComponent;
  let fixture: ComponentFixture<HomeVideoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVideoBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeVideoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
