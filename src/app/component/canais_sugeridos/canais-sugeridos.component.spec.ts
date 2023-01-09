import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanaisSugeridosComponent } from './canais-sugeridos.component';

describe('CanaisComponent', () => {
  let component: CanaisSugeridosComponent;
  let fixture: ComponentFixture<CanaisSugeridosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanaisSugeridosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanaisSugeridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
