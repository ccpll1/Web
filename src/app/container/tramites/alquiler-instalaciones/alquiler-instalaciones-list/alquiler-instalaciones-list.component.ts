import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-alquiler-instalaciones-list',
  templateUrl: './alquiler-instalaciones-list.component.html',
  styleUrls: ['./alquiler-instalaciones-list.component.css']
})
export class AlquilerInstalacionesListComponent implements OnInit {

  constructor(private service: ServiceService) { }
  dataTemp;
  preloadingstate: boolean;

  ngOnInit(): void {
    this.preloadingstate = true;
    this.service.listAlquiler()
      .subscribe((data) => {
        this.dataTemp = data;
        this.preloadingstate = false;
      });
  }
}
