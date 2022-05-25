import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  submitted = false;
  formulario: FormGroup;
  sesionuser;
  preloadingstate: boolean;

  constructor(private router: Router, private formBuilder: FormBuilder, private service: ServiceService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      old_password: ['', [Validators.required]],
      new_password: ['', [Validators.required]]
    });
  }

  get f() { return this.formulario.controls; }

  resetpassword() {
    let usersesion = JSON.parse(localStorage.getItem("user"));
    this.submitted = true;
    if (this.formulario.invalid) {
      return;
    }
    this.preloadingstate = true;
    let formData = new FormData();
    formData.append('idpersona', usersesion._PERSONA_ID);
    formData.append('new_password', this.formulario.value.new_password);
    try {
      this.service.resetpassword(formData)
        .subscribe((data) => {
          this.preloadingstate = true;
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Su contraseña se actualizó correctamente.',
            showConfirmButton: false,
            timer: 5000
          });
          this.preloadingstate = false;
          localStorage.clear();
          this.service.setAuthState(false);
          this.router.navigate(["/"]);
        },
          err => console.log(err),
        );
    }
    catch (e) {
      console.log(e);
    }
  }
}
