import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TematicasBoxComponent } from './tematicas-box.component';

describe('TematicasBoxComponent', () => {
  let component: TematicasBoxComponent;
  let fixture: ComponentFixture<TematicasBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TematicasBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TematicasBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
