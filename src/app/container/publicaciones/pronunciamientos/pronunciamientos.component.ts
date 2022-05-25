import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-pronunciamientos',
  templateUrl: './pronunciamientos.component.html',
  styleUrls: ['./pronunciamientos.component.css']
})
export class PronunciamientosComponent implements OnInit {

  constructor(private service: ServiceService) { }
  dataTemp;
  preloadingstate: boolean;

  ngOnInit(): void {
    this.service.listPronunciamiento()
      .subscribe((data) => {
        this.dataTemp = data;
        this.preloadingstate = false;
      });
  }

}
