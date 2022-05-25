import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColegiaturasComponent } from './colegiaturas.component';

describe('ColegiaturasComponent', () => {
  let component: ColegiaturasComponent;
  let fixture: ComponentFixture<ColegiaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColegiaturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColegiaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
