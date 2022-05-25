import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaDePartesVirtualComponent } from './mesa-de-partes-virtual.component';

describe('MesaDePartesVirtualComponent', () => {
  let component: MesaDePartesVirtualComponent;
  let fixture: ComponentFixture<MesaDePartesVirtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaDePartesVirtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaDePartesVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
