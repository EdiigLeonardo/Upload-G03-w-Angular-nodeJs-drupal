import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniVideoComponent } from './mini-video.component';

describe('MiniVideoComponent', () => {
  let component: MiniVideoComponent;
  let fixture: ComponentFixture<MiniVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
