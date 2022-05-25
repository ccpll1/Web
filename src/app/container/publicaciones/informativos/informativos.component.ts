import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Subscription } from 'rxjs';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informativos',
  templateUrl: './informativos.component.html',
  styleUrls: ['./informativos.component.css']
})
export class InformativosComponent implements OnInit {

  constructor(private service: ServiceService, private route: ActivatedRoute) { }

  userSubscription: Subscription;
  preloadingstate: boolean;
  dataTemp;
  fileUrl;
  categoria;

  ngOnInit(): void {
    this.userSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.preloadingstate = true;
        this.categoria = params['categoria'];
        this.service.getListFile(this.categoria)
          .subscribe((data) => {
            this.dataTemp = data;
            this.preloadingstate = false;
          });
      }
    );
  }

  downloadFile(item) {
    this.preloadingstate = true;
    this.service.getFile(item).subscribe(
      response => {
        var downloadURL = window.URL.createObjectURL(response);
        var link = document.createElement('a');
        link.href = downloadURL;
        link.download = item.name;
        link.click();
        this.preloadingstate = false;
      }
    )
  }
}
