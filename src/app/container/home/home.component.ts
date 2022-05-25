import { Component, OnInit, HostListener } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @HostListener("window:beforeunload", ["$event"]) clearLocalStorage(event) {
    localStorage.removeItem('modalstatus');
  }

  constructor(private service: ServiceService) {
  }

  config: SwiperOptions = {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  dataTempSlider;
  dataTemp;
  mySwiper: Swiper;
  destacado;
  flyer;
  urlflyer;
  comunicado;
  urlcomunicado;
  informativo;
  urlinformativo;
  secondflyer;
  urlsecondflyer;
  video;
  statusmodal;

  ngOnInit(): void {
    /*let data = localStorage.getItem('modalstatus');
    if (data == null) {
      Swal.fire({
        imageUrl: 'assets/img/emergente.png',
        animation: false,
        showCloseButton: true,
        showConfirmButton: false
      });
      localStorage.setItem('modalstatus', 'true');
    }*/

    this.service.listEventosAcademicos()
      .subscribe((data) => {
        this.dataTemp = data;
      });
    this.service.getSlider()
      .subscribe((data) => {
        this.dataTempSlider = data;
      });
    this.service.getInicio()
      .subscribe((data) => {
        for (let item of data) {
          if (item.categoria == 'flyer') {
            this.urlflyer = item.url;
            this.flyer = item.imagen;
          } else if (item.categoria == 'comunicado') {
            this.urlcomunicado = item.url;
            this.comunicado = item.imagen;
          } else if (item.categoria == 'informativo') {
            this.urlinformativo = item.url;
            this.informativo = item.imagen;
          } else if (item.categoria == 'secondflyer') {
            this.urlsecondflyer = item.url;
            this.secondflyer = item.imagen;
          } else if (item.categoria == 'video') {
            this.video = item.url;
          }
        }
      });
    this.service.getDestacado()
      .subscribe((data) => {
        this.destacado = data;
      });
  }

}
