import { Component, OnInit } from '@angular/core';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-instrumentos-de-gestion-y-control',
  templateUrl: './instrumentos-de-gestion-y-control.component.html',
  styleUrls: ['./instrumentos-de-gestion-y-control.component.css']
})
export class InstrumentosDeGestionYControlComponent implements OnInit {

  constructor(public readonly swalTargets: SwalPortalTargets) { }

  pdfSrc = 'https://ccpll.org/assets/archives/Presupuesto Institucional 2020.pdf';

  ngOnInit(): void {
  }
}
