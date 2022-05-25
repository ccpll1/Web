import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHistorialEstadoCuentaComponent } from './detalle-historial-estado-cuenta.component';

describe('DetalleHistorialEstadoCuentaComponent', () => {
  let component: DetalleHistorialEstadoCuentaComponent;
  let fixture: ComponentFixture<DetalleHistorialEstadoCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleHistorialEstadoCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleHistorialEstadoCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
