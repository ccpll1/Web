import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-libros-detalle',
  templateUrl: './libros-detalle.component.html',
  styleUrls: ['./libros-detalle.component.css']
})
export class LibrosDetalleComponent implements OnInit {

  constructor(private service: ServiceService, private route: ActivatedRoute) { }
  
  item;
  userSubscription: Subscription;
  preloadingstate: boolean;

  ngOnInit(): void {
    this.userSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.preloadingstate = true;
        this.service.detailLibro(params['titulo'])
          .subscribe((data) => {
            this.item = data;
            this.preloadingstate = false;
          });
      }
    );
  }

}
