import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  constructor(private service: ServiceService, private formBuilder: FormBuilder) { }

  asuntos = [{ 'categoria': 1, 'value': 'Pagos cuotas ordinarias y fondo mortuorio.' }, { 'categoria': 1, 'value': 'Constancia de habilidad' }, { 'categoria': 2, 'value': 'Trámites documentarios' },
  { 'categoria': 3, 'value': 'Colegiaturas' }, { 'categoria': 3, 'value': 'Eventos académicos(seminarios,cursos,diplomados,etc)' }, { 'categoria': 3, 'value': 'Otros' }];
  formulario: FormGroup;
  submitted: boolean;
  preloadingstate: boolean;

  ngOnInit(): void {
    this.submitted = false;
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      asunto: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
      categoria: ['']
    });
  }

  get f() { return this.formulario.controls; }

  save() {
    this.submitted = true;

    if (this.formulario.invalid) {
      return;
    }
    for (let i = 0; i < this.asuntos.length; i++) {
      if (this.asuntos[i].value == this.formulario.value.asunto) {
        this.formulario.patchValue({
          categoria: this.asuntos[i].categoria
        });
      }
    }
    this.preloadingstate = true;
    let formData = new FormData();
    formData.append('contacto', JSON.stringify(this.formulario.value));
    try {
      this.service.sendEmail(formData)
        .subscribe((data) => {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Correo enviado con éxito.',
            showConfirmButton: false,
            timer: 1500
          });
          this.ngOnInit();
          this.preloadingstate = false;
        },
          err => console.log(err),
        );
    }
    catch (e) {
      console.log(e);
    }
  }

}
