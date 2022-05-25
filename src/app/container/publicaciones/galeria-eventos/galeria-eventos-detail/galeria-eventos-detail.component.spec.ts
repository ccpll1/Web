import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaEventosDetailComponent } from './galeria-eventos-detail.component';

describe('GaleriaEventosDetailComponent', () => {
  let component: GaleriaEventosDetailComponent;
  let fixture: ComponentFixture<GaleriaEventosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaEventosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaEventosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
