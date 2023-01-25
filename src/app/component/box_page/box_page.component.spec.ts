import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CanalBoxComponent} from './box_page.component';

describe('CanalBoxComponent', () => {
  let component: CanalBoxComponent;
  let fixture: ComponentFixture<CanalBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CanalBoxComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CanalBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
