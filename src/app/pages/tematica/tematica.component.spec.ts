import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TematicaComponent } from './tematica.component';

describe('TematicaComponent', () => {
  let component: TematicaComponent;
  let fixture: ComponentFixture<TematicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TematicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TematicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
