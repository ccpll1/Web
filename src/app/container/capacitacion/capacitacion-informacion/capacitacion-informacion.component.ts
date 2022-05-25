import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-capacitacion-informacion',
  templateUrl: './capacitacion-informacion.component.html',
  styleUrls: ['./capacitacion-informacion.component.css']
})
export class CapacitacionInformacionComponent implements OnInit {

  constructor(private service: ServiceService, private route: ActivatedRoute) { }

  item;
  userSubscription: Subscription;
  preloadingstate: boolean;

  ngOnInit(): void {
    this.userSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.preloadingstate = true;
        this.service.detailcapacitacion(params['categoria'], params['titulo'])
          .subscribe((data) => {
            this.item = data;
            this.preloadingstate = false;
          });
      }
    );
  }

}
