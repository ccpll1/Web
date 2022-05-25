import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entrevistas',
  templateUrl: './entrevistas.component.html',
  styleUrls: ['./entrevistas.component.css']
})
export class EntrevistasComponent implements OnInit {

  constructor(private youtubeservice: ServiceService) { }

  videos = [];
  preloadingstate: boolean;
  p;

  ngOnInit(): void {
    this.preloadingstate = true;
    this.youtubeservice.getVideosForChanel('UCwvo6rDS9ewO0vXR6tXTJPg', 999, 'PLAmmMGkYXqsuEdpEOLQWjP_gLKI8EAesV')
      .subscribe((data) => {
        this.videos = data.items.reverse();
        this.preloadingstate = false;
      });
  }
  onPageChange(page: number) {
    this.p = page;
    window.scrollTo(0, 0);
  }

}
