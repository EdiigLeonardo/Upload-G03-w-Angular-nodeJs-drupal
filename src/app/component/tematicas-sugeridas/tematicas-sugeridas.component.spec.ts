import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TematicasSugeridasComponent } from './tematicas-sugeridas.component';

describe('TematicasSugeridasComponent', () => {
  let component: TematicasSugeridasComponent;
  let fixture: ComponentFixture<TematicasSugeridasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TematicasSugeridasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TematicasSugeridasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
