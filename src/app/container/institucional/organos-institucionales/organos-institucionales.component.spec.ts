import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganosInstitucionalesComponent } from './organos-institucionales.component';

describe('OrganosInstitucionalesComponent', () => {
  let component: OrganosInstitucionalesComponent;
  let fixture: ComponentFixture<OrganosInstitucionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganosInstitucionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganosInstitucionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
