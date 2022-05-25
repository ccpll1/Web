import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-habilidad-del-contador',
  templateUrl: './habilidad-del-contador.component.html',
  styleUrls: ['./habilidad-del-contador.component.css']
})
export class HabilidadDelContadorComponent implements OnInit {

  dataTemp;
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
    this.service.listarColegiados(this.formulario.value.word)
      .subscribe((data) => {
        if (data != null) {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Información encontrada con éxito.',
            showConfirmButton: false,
            timer: 2000
          })
          this.dataTemp = data;
        } else {
          Swal.fire({
            position: 'top',
            icon: 'warning',
            title: 'No se encuentra registrado.',
            showConfirmButton: false,
            timer: 2000
          })
        }
        this.preloadingstate = false;
      });
  }
}
