import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-alquiler-instalaciones-detail',
  templateUrl: './alquiler-instalaciones-detail.component.html',
  styleUrls: ['./alquiler-instalaciones-detail.component.css']
})
export class AlquilerInstalacionesDetailComponent implements OnInit {

  constructor(private service: ServiceService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  item;
  images;
  userSubscription: Subscription;
  preloadingstate: boolean;

  ngOnInit(): void {
    this.userSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.preloadingstate = true;
        this.service.detailAlquiler(params['titulo'])
          .subscribe((data) => {
            this.images = [];
            for (let item of data.imagen) {
              this.images.push('data:image/png;base64,' + (this.sanitizer.bypassSecurityTrustResourceUrl(item) as any).changingThisBreaksApplicationSecurity);
            } 
            this.item = data;
            this.item.portada = 'data:image/png;base64,' + (this.sanitizer.bypassSecurityTrustResourceUrl(data.portada) as any).changingThisBreaksApplicationSecurity
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
