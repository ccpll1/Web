import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadDeSociedadDeAuditoriaComponent } from './habilidad-de-sociedad-de-auditoria.component';

describe('HabilidadDeSociedadDeAuditoriaComponent', () => {
  let component: HabilidadDeSociedadDeAuditoriaComponent;
  let fixture: ComponentFixture<HabilidadDeSociedadDeAuditoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilidadDeSociedadDeAuditoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadDeSociedadDeAuditoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
