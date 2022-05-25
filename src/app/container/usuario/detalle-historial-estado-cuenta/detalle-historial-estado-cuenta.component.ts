import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalle-historial-estado-cuenta',
  templateUrl: './detalle-historial-estado-cuenta.component.html',
  styleUrls: ['./detalle-historial-estado-cuenta.component.css']
})
export class DetalleHistorialEstadoCuentaComponent implements OnInit {

  constructor(private service: ServiceService, private route: ActivatedRoute) { }

  datahistorial;
  preloadingstate;
  p;
  userSubscription: Subscription;

  ngOnInit(): void {
    let usersesion = JSON.parse(localStorage.getItem("user"));

    this.userSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.preloadingstate = true;
        this.service.listDetalleEstadoCuenta(usersesion._PERSONA_ID, params['idproducto'])
          .subscribe((data) => {
            this.datahistorial = data;
            this.preloadingstate = false;
          });
      }
    );
  }

  onPageChange(page: number) {
    this.p = page;
    window.scrollTo(0, 0);
  }
}