import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosColegiadosComponent } from './beneficios-colegiados.component';

describe('BeneficiosColegiadosComponent', () => {
  let component: BeneficiosColegiadosComponent;
  let fixture: ComponentFixture<BeneficiosColegiadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiosColegiadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiosColegiadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
