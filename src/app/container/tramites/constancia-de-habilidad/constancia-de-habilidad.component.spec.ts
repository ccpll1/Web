import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstanciaDeHabilidadComponent } from './constancia-de-habilidad.component';

describe('ConstanciaDeHabilidadComponent', () => {
  let component: ConstanciaDeHabilidadComponent;
  let fixture: ComponentFixture<ConstanciaDeHabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstanciaDeHabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstanciaDeHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
