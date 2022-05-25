import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-historial-estado-cuenta',
  templateUrl: './historial-estado-cuenta.component.html',
  styleUrls: ['./historial-estado-cuenta.component.css']
})
export class HistorialEstadoCuentaComponent implements OnInit {

  constructor(private service: ServiceService) { }

  datahistorial;
  preloadingstate;
  p;

  ngOnInit(): void {
    let usersesion = JSON.parse(localStorage.getItem("user"));

    this.preloadingstate = true;
    this.service.listEstadoCuenta(usersesion._PERSONA_ID)
      .subscribe((data) => {
        this.datahistorial = data;
        this.preloadingstate = false;
      });
  }
  onPageChange(page: number) {
    this.p = page;
    window.scrollTo(0, 0);
  }

}
