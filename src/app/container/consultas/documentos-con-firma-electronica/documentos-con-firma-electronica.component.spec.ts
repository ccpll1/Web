import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosConFirmaElectronicaComponent } from './documentos-con-firma-electronica.component';

describe('DocumentosConFirmaElectronicaComponent', () => {
  let component: DocumentosConFirmaElectronicaComponent;
  let fixture: ComponentFixture<DocumentosConFirmaElectronicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentosConFirmaElectronicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosConFirmaElectronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
