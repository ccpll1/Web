import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaEventosListComponent } from './galeria-eventos-list.component';

describe('GaleriaEventosListComponent', () => {
  let component: GaleriaEventosListComponent;
  let fixture: ComponentFixture<GaleriaEventosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaEventosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaEventosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
