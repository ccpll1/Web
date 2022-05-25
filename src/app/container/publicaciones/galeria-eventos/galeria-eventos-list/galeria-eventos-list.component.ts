import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-galeria-eventos-list',
  templateUrl: './galeria-eventos-list.component.html',
  styleUrls: ['./galeria-eventos-list.component.css']
})
export class GaleriaEventosListComponent implements OnInit {

  constructor(private service: ServiceService) { }
  dataTemp;
  preloadingstate: boolean;

  ngOnInit(): void {
    this.preloadingstate = true;
    this.service.listEvento()
      .subscribe((data) => {
        this.dataTemp = data;
        this.preloadingstate = false;
      });
  }
}
