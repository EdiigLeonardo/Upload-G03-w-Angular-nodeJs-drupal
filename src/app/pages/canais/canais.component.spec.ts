import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanaisComponent } from './canais.component';

describe('CanaisComponent', () => {
  let component: CanaisComponent;
  let fixture: ComponentFixture<CanaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
