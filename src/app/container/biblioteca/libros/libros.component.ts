import { Component, HostListener, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  constructor(private service: ServiceService) { }

  libros;
  secciones;
  arrayfiltrado;
  pageIndex;
  arrayg = {
    coleccion: {

    },
    editorial: {

    },
    anho: {

    }
  };
  dataFilter: Array<{ filter: string, det: any, alias: string }> = [];
  searchString;
  preloadingstate;

  ngOnInit(): void {
    this.preloadingstate = true;
    this.pageIndex = 0;
    forkJoin({
      secciones: this.service.listSecciones()
    }).subscribe(({ secciones }: any) => {
      this.secciones = secciones;
      this.getListLibros(0)
    });
  }

  getListLibros(seccion_id) {
    this.pageIndex = 0;
    this.preloadingstate = true;
    this.libros = [];
    this.service.listLibros(seccion_id)
      .subscribe((data) => {
        this.libros = data;
        this.generarlista(this.libros);
        this.arrayfiltrado = data;
        this.preloadingstate = false;
      });
  }

  onChange(cat, value, isChecked: boolean) {
    this.arrayg[cat][value] = isChecked;
    this.transform(this.arrayg);
  }

  transform(filters) {
    this.arrayfiltrado = [];
    let newArray = [];
    for (let i = 0; i < this.libros.length; i++) {
      var matchesAND = true;
      for (var obj in filters) {
        if (filters.hasOwnProperty(obj)) {
          if (this.noSubFilter(filters[obj])) continue;
          if (!filters[obj][this.libros[i][obj]]) {
            matchesAND = false;
          }
        }
      }
      if (matchesAND == true) {
        newArray.push(this.libros[i]);
      }
    }
    return this.arrayfiltrado = newArray;
  }

  noSubFilter(obj) {
    for (var key in obj) {
      if (obj[key]) return false;
    }
    return true;
  }

  generarlista(data) {
    this.dataFilter = [];
    let categories = [{ cod: 'coleccion', alias: 'Colección' }, { cod: 'editorial', alias: 'Editorial' }, { cod: 'anho', alias: 'Año' }];
    for (let i = 0; i < categories.length; i++) {
      let array2 = [];
      (data || []).map(function (w) {
        let exists = true;
        if (array2.length == 0) {
          array2.push((w[categories[i].cod]));
        } else {
          for (let x = 0; x < array2.length; x++) {
            if (array2[x] == (w[categories[i].cod])) {
              exists = false;
            }
          }
          if (exists) {
            array2.push((w[categories[i].cod]));
          }
        }
      })
      this.dataFilter.push({ filter: categories[i].cod, det: array2, alias: categories[i].alias });
    }
  }

  onPageChange(page: number) {
    this.pageIndex = page;
    window.scrollTo(0, 0);
  }
}
