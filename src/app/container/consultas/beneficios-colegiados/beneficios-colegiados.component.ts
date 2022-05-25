import { Component, OnInit } from '@angular/core';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-beneficios-colegiados',
  templateUrl: './beneficios-colegiados.component.html',
  styleUrls: ['./beneficios-colegiados.component.css']
})
export class BeneficiosColegiadosComponent implements OnInit {

  constructor(public readonly swalTargets: SwalPortalTargets, private service: ServiceService) { }

  dataTemp;
  ngOnInit(): void {
    this.service.listEventosAcademicos()
      .subscribe((data) => {
        this.dataTemp = data;
      });
  }
}

