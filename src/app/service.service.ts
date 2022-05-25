import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Search } from './container/search-results/search';
import { Observable, BehaviorSubject } from 'rxjs';

const API = 'https://server.ccpll.org/api';
//const API = 'http://localhost:8000/api';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private userState = new BehaviorSubject<boolean>(this.isLoggedIn());
  userAuthState = this.userState.asObservable();

  constructor(private http: HttpClient) { }
  apiKey: string = 'AIzaSyCnA19g4GG32IuPqWe5sfkXPy9QKGMV1dU';

  setAuthState(value: boolean) {
    this.userState.next(value);
  }

  listarColegiados(word): any {
    return this.http.get(API + '/listcolegiados/' + word);
  }
  getVideosForChanel(channel, maxResults, playlistId): any {
    let url = 'https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&order=date&maxResults=' + maxResults + '&playlistId=' + playlistId
    return this.http.get(url);
  }
  getListFile(categoria): any {
    return this.http.get(API + '/listfile/' + categoria);
  }
  getFile(item) {
    return this.http.post(API + '/downloadfile', item, {
      responseType: 'blob'
    });
  }
  getSlider(): any {
    return this.http.get(API + '/listimage');
  }
  listEventosAcademicos(): any {
    return this.http.get(API + '/listeventosacademicos');
  }
  listCapacitacion(categoria): any {
    return this.http.get(API + '/listcapacitacion/' + categoria);
  }
  detailcapacitacion(categoria, titulo): any {
    return this.http.get(API + '/detailcapacitacion/' + categoria + '/' + titulo);
  }
  listPronunciamiento(): any {
    return this.http.get(API + '/listpronunciamientos');
  }
  detailpronunciamiento(titulo): any {
    return this.http.get(API + '/detailpronunciamiento/' + titulo);
  }
  listAlquiler(): any {
    return this.http.get(API + '/listalquiler');
  }
  detailAlquiler(titulo): any {
    return this.http.get(API + '/detailalquiler/' + titulo);
  }
  listEvento(): any {
    return this.http.get(API + '/listevento');
  }
  detailEvento(titulo): any {
    return this.http.get(API + '/detailevento/' + titulo);
  }
  getDestacado(): any {
    return this.http.get(API + '/destacado');
  }
  getInicio(): any {
    return this.http.get(API + '/listinicio');
  }
  getComunicados(): any {
    return this.http.get(API + '/listcomunicados');
  }
  searchAuditorIndependiente(dni): any {
    return this.http.get(API + '/auditoresindependientes/' + dni);
  }
  searchPeritoContable(dni): any {
    return this.http.get(API + '/peritoscontables/' + dni);
  }
  search(searchQuery: string) {
    return this.http.get<Search>('https://www.googleapis.com/customsearch/v1?key=AIzaSyDevvCGS1CrVcCPNLS1a8B1vWJ6hB9i2lc&cx=002729300327124292132:vgrehofxyi1&q=' + searchQuery + '&safe=high');
  }
  searchNextPage(searchQuery: string, start: number): any {
    return this.http.get<Search>('https://www.googleapis.com/customsearch/v1?key=AIzaSyDevvCGS1CrVcCPNLS1a8B1vWJ6hB9i2lc&cx=002729300327124292132:vgrehofxyi1&q=' + searchQuery + '&safe=high&start=' + start);
  }
  sendEmail(formData: Object): any {
    return this.http.post(API + '/contact', formData);
  }
  buscarColegiadoDocumentoDigital(n_matr) {
    return this.http.get(API + '/infocolegiadoxdocumentodigital/' + n_matr);
  }
  getPDFxDocumentoDigital(item) {
    return this.http.post(API + '/descargapdfdocumentodigital', item, {
      responseType: 'blob'
    });
  }
  login(formData: Object): any {
    return this.http.post(API + '/auth/login', formData);
  }
  listEstadoCuenta(uuidpersona): any {
    return this.http.get(API + '/user/estadocuenta/' + uuidpersona);
  }
  resetpassword(formData: Object): any {
    return this.http.post(API + '/user/resetpassword', formData);
  }
  listDetalleEstadoCuenta(uuidpersona, idproducto): any {
    return this.http.get(API + '/user/detalle-estadocuenta/' + uuidpersona + '/' + idproducto);
  }

  listLibros(seccion_id): any {
    return this.http.get(API + '/libros/' + seccion_id);
  }

  listSecciones(): any {
    return this.http.get(API + '/secciones');
  }

  detailLibro(titulo): any {
    return this.http.get(API + '/detaillibro/' + titulo);
  }

  isLoggedIn() {
    const user = localStorage.getItem('user');
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}