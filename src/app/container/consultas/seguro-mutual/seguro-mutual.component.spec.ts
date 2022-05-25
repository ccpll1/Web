import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroMutualComponent } from './seguro-mutual.component';

describe('SeguroMutualComponent', () => {
  let component: SeguroMutualComponent;
  let fixture: ComponentFixture<SeguroMutualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguroMutualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguroMutualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
