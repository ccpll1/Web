import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilerInstalacionesDetailComponent } from './alquiler-instalaciones-detail.component';

describe('AlquilerInstalacionesDetailComponent', () => {
  let component: AlquilerInstalacionesDetailComponent;
  let fixture: ComponentFixture<AlquilerInstalacionesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquilerInstalacionesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquilerInstalacionesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
