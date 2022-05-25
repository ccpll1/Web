import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionDeSociedadesDeAudtoriaComponent } from './inscripcion-de-sociedades-de-audtoria.component';

describe('InscripcionDeSociedadesDeAudtoriaComponent', () => {
  let component: InscripcionDeSociedadesDeAudtoriaComponent;
  let fixture: ComponentFixture<InscripcionDeSociedadesDeAudtoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionDeSociedadesDeAudtoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionDeSociedadesDeAudtoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
