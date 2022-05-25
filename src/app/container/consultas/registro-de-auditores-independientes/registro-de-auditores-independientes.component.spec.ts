import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDeAuditoresIndependientesComponent } from './registro-de-auditores-independientes.component';

describe('RegistroDeAuditoresIndependientesComponent', () => {
  let component: RegistroDeAuditoresIndependientesComponent;
  let fixture: ComponentFixture<RegistroDeAuditoresIndependientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDeAuditoresIndependientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDeAuditoresIndependientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
