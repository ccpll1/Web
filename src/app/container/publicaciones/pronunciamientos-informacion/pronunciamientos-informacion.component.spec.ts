import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronunciamientosInformacionComponent } from './pronunciamientos-informacion.component';

describe('PronunciamientosInformacionComponent', () => {
  let component: PronunciamientosInformacionComponent;
  let fixture: ComponentFixture<PronunciamientosInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronunciamientosInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronunciamientosInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
