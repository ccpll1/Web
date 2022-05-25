import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativosComponent } from './informativos.component';

describe('InformativosComponent', () => {
  let component: InformativosComponent;
  let fixture: ComponentFixture<InformativosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformativosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
