import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro-de-peritos-contables',
  templateUrl: './registro-de-peritos-contables.component.html',
  styleUrls: ['./registro-de-peritos-contables.component.css']
})
export class RegistroDePeritosContablesComponent implements OnInit {
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
    this.service.searchPeritoContable(this.formulario.value.word)
      .subscribe((data) => {
        this.dataTemp = data;
        this.preloadingstate = false;
      });
  }
}
