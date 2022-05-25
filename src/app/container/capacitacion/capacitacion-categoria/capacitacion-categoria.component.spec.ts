import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitacionCategoriaComponent } from './capacitacion-categoria.component';

describe('CapacitacionCategoriaComponent', () => {
  let component: CapacitacionCategoriaComponent;
  let fixture: ComponentFixture<CapacitacionCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitacionCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitacionCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
