import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronunciamientosComponent } from './pronunciamientos.component';

describe('PronunciamientosComponent', () => {
  let component: PronunciamientosComponent;
  let fixture: ComponentFixture<PronunciamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronunciamientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronunciamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
