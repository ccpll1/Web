import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-galeria-eventos-detail',
  templateUrl: './galeria-eventos-detail.component.html',
  styleUrls: ['./galeria-eventos-detail.component.css']
})
export class GaleriaEventosDetailComponent implements OnInit {

  constructor(private service: ServiceService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  item;
  images;
  userSubscription: Subscription;
  preloadingstate: boolean;
  
  ngOnInit(): void {
    this.userSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.preloadingstate = true;
        this.service.detailEvento(params['titulo'])
          .subscribe((data) => {
            this.images = [];
            for (let item of data.imagen) {
              this.images.push('data:image/png;base64,' + (this.sanitizer.bypassSecurityTrustResourceUrl(item) as any).changingThisBreaksApplicationSecurity);
            }
            this.item = data;
            this.preloadingstate = false;
          });
      }
    );
  }

  imagemodal(url) {
    Swal.fire({
      imageUrl: url,
    })
  }
}
