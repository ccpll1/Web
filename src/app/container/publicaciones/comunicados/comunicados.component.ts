import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.component.html',
  styleUrls: ['./comunicados.component.css']
})
export class ComunicadosComponent implements OnInit {

  constructor(private service: ServiceService, public readonly swalTargets: SwalPortalTargets) { }
  dataTemp;
  preloadingstate;
  p;
  imagen;

  ngOnInit(): void {
    this.preloadingstate = true;
    this.service.getComunicados()
      .subscribe((data) => {
        this.dataTemp = data;
        this.preloadingstate = false;
      });
  }
}
