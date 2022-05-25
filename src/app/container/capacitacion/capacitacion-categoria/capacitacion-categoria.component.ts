import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-capacitacion-categoria',
  templateUrl: './capacitacion-categoria.component.html',
  styleUrls: ['./capacitacion-categoria.component.css']
})
export class CapacitacionCategoriaComponent implements OnInit {

  constructor(private service: ServiceService, private route: ActivatedRoute) { }

  userSubscription: Subscription;
  preloadingstate: boolean;
  dataTemp;
  categoria;
  p;

  ngOnInit(): void {
    this.userSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.preloadingstate = true;
        this.categoria = params['categoria'];
        this.service.listCapacitacion(this.categoria)
          .subscribe((data) => {
            this.dataTemp = data;
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
