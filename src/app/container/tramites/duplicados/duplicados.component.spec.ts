import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicadosComponent } from './duplicados.component';

describe('DuplicadosComponent', () => {
  let component: DuplicadosComponent;
  let fixture: ComponentFixture<DuplicadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
