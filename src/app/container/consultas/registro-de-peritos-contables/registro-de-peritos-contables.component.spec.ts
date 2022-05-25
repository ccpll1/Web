import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDePeritosContablesComponent } from './registro-de-peritos-contables.component';

describe('RegistroDePeritosContablesComponent', () => {
  let component: RegistroDePeritosContablesComponent;
  let fixture: ComponentFixture<RegistroDePeritosContablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDePeritosContablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDePeritosContablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
