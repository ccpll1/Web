import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  formulario: FormGroup;
  usuarioincorrecto: boolean;
  mensajelogg;
  sesionuser;
  preloadingstate: boolean;

  constructor(private router: Router, private formBuilder: FormBuilder, private service: ServiceService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      user: ['', [Validators.required]],
      passw: ['', [Validators.required]]
    });
  }

  get f() { return this.formulario.controls; }

  login() {
    this.submitted = true;
    if (this.formulario.invalid) {
      return;
    }
    this.preloadingstate = true;
    let formData = new FormData();
    formData.append('usuario', this.formulario.value.user);
    formData.append('password', this.formulario.value.passw);
    try {
      this.service.login(formData)
        .subscribe((data) => {
          if (data._PERSONA_ID == 0) {
            this.usuarioincorrecto = true;
            this.mensajelogg = 'Datos incorrectos';
          } else {
            localStorage.setItem('user', JSON.stringify(data));
            this.service.setAuthState(true);
            this.router.navigate(["/"]);
          }
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
