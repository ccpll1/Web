import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuotaOrdinariaComponent } from './cuota-ordinaria.component';

describe('CuotaOrdinariaComponent', () => {
  let component: CuotaOrdinariaComponent;
  let fixture: ComponentFixture<CuotaOrdinariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuotaOrdinariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuotaOrdinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
