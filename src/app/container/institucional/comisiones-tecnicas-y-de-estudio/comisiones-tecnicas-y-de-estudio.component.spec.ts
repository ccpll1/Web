import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionesTecnicasYDeEstudioComponent } from './comisiones-tecnicas-y-de-estudio.component';

describe('ComisionesTecnicasYDeEstudioComponent', () => {
  let component: ComisionesTecnicasYDeEstudioComponent;
  let fixture: ComponentFixture<ComisionesTecnicasYDeEstudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComisionesTecnicasYDeEstudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComisionesTecnicasYDeEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
