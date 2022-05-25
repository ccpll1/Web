import { Component, OnInit } from '@angular/core';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.css']
})
export class ConveniosComponent implements OnInit {

  constructor(public readonly swalTargets: SwalPortalTargets) { }

  showpdfconvenio = '';

  ngOnInit(): void {
  }

}
