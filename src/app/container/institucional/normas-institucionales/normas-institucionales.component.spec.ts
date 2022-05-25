import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormasInstitucionalesComponent } from './normas-institucionales.component';

describe('NormasInstitucionalesComponent', () => {
  let component: NormasInstitucionalesComponent;
  let fixture: ComponentFixture<NormasInstitucionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormasInstitucionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormasInstitucionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
