import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadDelContadorComponent } from './habilidad-del-contador.component';

describe('HabilidadDelContadorComponent', () => {
  let component: HabilidadDelContadorComponent;
  let fixture: ComponentFixture<HabilidadDelContadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilidadDelContadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadDelContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
