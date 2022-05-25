import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroMutualTrComponent } from './seguro-mutual-tr.component';

describe('SeguroMutualTrComponent', () => {
  let component: SeguroMutualTrComponent;
  let fixture: ComponentFixture<SeguroMutualTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguroMutualTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguroMutualTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
