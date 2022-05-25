import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro-de-auditores-independientes',
  templateUrl: './registro-de-auditores-independientes.component.html',
  styleUrls: ['./registro-de-auditores-independientes.component.css']
})
export class RegistroDeAuditoresIndependientesComponent implements OnInit {

  dataTemp = [];
  p;
  preloadingstate: boolean;
  searchString;
  formulario: FormGroup;
  submitted: boolean;

  constructor(private service: ServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.submitted = false;
    this.formulario = this.formBuilder.group({
      word: ['', [Validators.required]],
    });

  }
  get f() { return this.formulario.controls; }

  search() {
    this.submitted = true;

    if (this.formulario.invalid) {
      return;
    }
    this.preloadingstate = true;
    this.service.searchAuditorIndependiente(this.formulario.value.word)
      .subscribe((data) => {
        this.dataTemp = data;
        this.preloadingstate = false;
      });
  }
}