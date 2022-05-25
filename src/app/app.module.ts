import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './container/home/home.component';
import { TransparenciaComponent } from './container/transparencia/transparencia.component';
import { HistoriaComponent } from './container/institucional/historia/historia.component';
import { ContactanosComponent } from './container/contactanos/contactanos.component';
import { FilterPipe } from './shared/FilterPipe';
import { NormasInstitucionalesComponent } from './container/institucional/normas-institucionales/normas-institucionales.component';
import { ConsejoDirectivoComponent } from './container/institucional/consejo-directivo/consejo-directivo.component';
import { OrganosInstitucionalesComponent } from './container/institucional/organos-institucionales/organos-institucionales.component';
import { ComisionesTecnicasYDeEstudioComponent } from './container/institucional/comisiones-tecnicas-y-de-estudio/comisiones-tecnicas-y-de-estudio.component';
import { InstrumentosDeGestionYControlComponent } from './container/institucional/instrumentos-de-gestion-y-control/instrumentos-de-gestion-y-control.component';
import { DocumentosConFirmaElectronicaComponent } from './container/consultas/documentos-con-firma-electronica/documentos-con-firma-electronica.component';
import { HabilidadDelContadorComponent } from './container/consultas/habilidad-del-contador/habilidad-del-contador.component';
import { HabilidadDeSociedadDeAuditoriaComponent } from './container/consultas/habilidad-de-sociedad-de-auditoria/habilidad-de-sociedad-de-auditoria.component';
import { RegistroDeAuditoresIndependientesComponent } from './container/consultas/registro-de-auditores-independientes/registro-de-auditores-independientes.component';
import { RegistroDePeritosContablesComponent } from './container/consultas/registro-de-peritos-contables/registro-de-peritos-contables.component';
import { ConveniosComponent } from './container/consultas/convenios/convenios.component';
import { BeneficiosColegiadosComponent } from './container/consultas/beneficios-colegiados/beneficios-colegiados.component';
import { SeguroMutualComponent } from './container/consultas/seguro-mutual/seguro-mutual.component';
import { MesaDePartesVirtualComponent } from './container/tramites/mesa-de-partes-virtual/mesa-de-partes-virtual.component';
import { FormaDePagosComponent } from './container/tramites/forma-de-pagos/forma-de-pagos.component';
import { ColegiaturasComponent } from './container/tramites/colegiaturas/colegiaturas.component';
import { InscripcionDeSociedadesDeAudtoriaComponent } from './container/tramites/inscripcion-de-sociedades-de-audtoria/inscripcion-de-sociedades-de-audtoria.component';
import { CuotaOrdinariaComponent } from './container/tramites/cuota-ordinaria/cuota-ordinaria.component';
import { SeguroMutualTrComponent } from './container/tramites/seguro-mutual-tr/seguro-mutual-tr.component';
import { ConstanciaDeHabilidadComponent } from './container/tramites/constancia-de-habilidad/constancia-de-habilidad.component';
import { EntrevistasComponent } from './container/capacitacion/entrevistas/entrevistas.component';
import { NoticiasComponent } from './container/publicaciones/noticias/noticias.component';
import { PronunciamientosComponent } from './container/publicaciones/pronunciamientos/pronunciamientos.component';
import { RevistaComponent } from './container/publicaciones/revista/revista.component';
import { ComunicadosComponent } from './container/publicaciones/comunicados/comunicados.component';
import { YoutubePipe } from './shared/PipeYoutube';
import { TimeFormat } from './shared/TimeFormatPipe';
import { DuplicadosComponent } from './container/tramites/duplicados/duplicados.component';
import { CapacitacionInformacionComponent } from './container/capacitacion/capacitacion-informacion/capacitacion-informacion.component';
import { CapacitacionCategoriaComponent } from './container/capacitacion/capacitacion-categoria/capacitacion-categoria.component';
import { innerhtml } from './shared/innerhtml';
import { PronunciamientosInformacionComponent } from './container/publicaciones/pronunciamientos-informacion/pronunciamientos-informacion.component';
import { AlquilerInstalacionesListComponent } from './container/tramites/alquiler-instalaciones/alquiler-instalaciones-list/alquiler-instalaciones-list.component';
import { AlquilerInstalacionesDetailComponent } from './container/tramites/alquiler-instalaciones/alquiler-instalaciones-detail/alquiler-instalaciones-detail.component';
import { GaleriaEventosListComponent } from './container/publicaciones/galeria-eventos/galeria-eventos-list/galeria-eventos-list.component';
import { GaleriaEventosDetailComponent } from './container/publicaciones/galeria-eventos/galeria-eventos-detail/galeria-eventos-detail.component';

import { NgxMasonryModule } from 'ngx-masonry';
import { InformesComponent } from './container/capacitacion/informes/informes.component';
import { InformativosComponent } from './container/publicaciones/informativos/informativos.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SearchResultsComponent } from './container/search-results/search-results.component';
import { LoginComponent } from './container/authentication/login/login.component';
import { HistorialEstadoCuentaComponent } from './container/usuario/historial-estado-cuenta/historial-estado-cuenta.component';
import { ResetPasswordComponent } from './container/usuario/reset-password/reset-password.component';
import { DetalleHistorialEstadoCuentaComponent } from './container/usuario/detalle-historial-estado-cuenta/detalle-historial-estado-cuenta.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { LibrosComponent } from './container/biblioteca/libros/libros.component';
import { LibrosDetalleComponent } from './container/biblioteca/libros-detalle/libros-detalle.component';

registerLocaleData(localeEsAr, 'es-Ar');
const appRoutes: Routes = [
  {
    path: '', component: ContainerComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'institucional/historia', component: HistoriaComponent },
      { path: 'institucional/normas-institucionales', component: NormasInstitucionalesComponent },
      { path: 'institucional/consejo-directivo', component: ConsejoDirectivoComponent },
      { path: 'institucional/organos-institucionales', component: OrganosInstitucionalesComponent },
      { path: 'institucional/comisiones-tecnicas-y-de-estudio', component: ComisionesTecnicasYDeEstudioComponent },
      { path: 'institucional/instrumentos-de-gestion-y-control', component: InstrumentosDeGestionYControlComponent },
      { path: 'transparencia', component: TransparenciaComponent },
      { path: 'consultas/documentos-con-firma-electronica', component: DocumentosConFirmaElectronicaComponent },
      { path: 'consultas/habilidad-del-contador', component: HabilidadDelContadorComponent },
      { path: 'consultas/habilidad-de-sociedad-de-auditoria', component: HabilidadDeSociedadDeAuditoriaComponent },
      { path: 'consultas/registro-de-auditores-independientes', component: RegistroDeAuditoresIndependientesComponent },
      { path: 'consultas/registro-de-peritos-contables', component: RegistroDePeritosContablesComponent },
      { path: 'consultas/convenios', component: ConveniosComponent },
      { path: 'consultas/beneficios-colegiados', component: BeneficiosColegiadosComponent },
      { path: 'consultas/seguro-mutual', component: SeguroMutualComponent },
      { path: 'tramites/mesa-de-partes-virtual', component: MesaDePartesVirtualComponent },
      { path: 'tramites/forma-de-pagos', component: FormaDePagosComponent },
      { path: 'tramites/colegiaturas', component: ColegiaturasComponent },
      { path: 'tramites/inscripcion-de-sociedades-de-audtoria', component: InscripcionDeSociedadesDeAudtoriaComponent },
      { path: 'tramites/cuota-ordinaria', component: CuotaOrdinariaComponent },
      { path: 'tramites/seguro-mutual', component: SeguroMutualTrComponent },
      { path: 'tramites/constancia-de-habilidad', component: ConstanciaDeHabilidadComponent },
      { path: 'tramites/alquiler-de-instalaciones', component: AlquilerInstalacionesListComponent },
      { path: 'tramites/alquiler-de-instalaciones/:titulo', component: AlquilerInstalacionesDetailComponent },
      { path: 'tramites/duplicados', component: DuplicadosComponent },
      { path: 'capacitacion/entrevistas', component: EntrevistasComponent },
      { path: 'capacitacion/informes', component: InformesComponent },
      { path: 'capacitacion/:categoria', component: CapacitacionCategoriaComponent },
      { path: 'capacitacion/:categoria/:titulo', component: CapacitacionInformacionComponent },

      { path: 'publicaciones/noticias', component: NoticiasComponent },
      { path: 'publicaciones/comunicados', component: ComunicadosComponent },
      { path: 'publicaciones/pronunciamientos', component: PronunciamientosComponent },
      { path: 'publicaciones/pronunciamientos/:titulo', component: PronunciamientosInformacionComponent },
      { path: 'publicaciones/revista', component: RevistaComponent },

      { path: 'publicaciones/informativos/:categoria', component: InformativosComponent },

      { path: 'publicaciones/galeria-de-eventos', component: GaleriaEventosListComponent },
      { path: 'publicaciones/galeria-de-eventos/:titulo', component: GaleriaEventosDetailComponent },

      { path: 'usuario/historial-estado-cuenta', component: HistorialEstadoCuentaComponent },
      { path: 'usuario/detalle-historial-estado-cuenta/:idproducto', component: DetalleHistorialEstadoCuentaComponent },
      { path: 'usuario/reset-password', component: ResetPasswordComponent },

      { path: 'login', component: LoginComponent },
      { path: 'contacto', component: ContactanosComponent },
      { path: 'search', component: SearchResultsComponent },
      { path: 'biblioteca/libros', component: LibrosComponent },
      { path: 'biblioteca/libros/:titulo', component: LibrosDetalleComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
      /*{ path: 'contacto', component: ContactComponent },
      //{ path: '404', component: NotfoundComponent },
      */
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TransparenciaComponent,
    HistoriaComponent,
    ComunicadosComponent,
    ContactanosComponent,
    FilterPipe,
    TimeFormat,
    NormasInstitucionalesComponent,
    ConsejoDirectivoComponent,
    OrganosInstitucionalesComponent,
    ComisionesTecnicasYDeEstudioComponent,
    InstrumentosDeGestionYControlComponent,
    DocumentosConFirmaElectronicaComponent,
    HabilidadDelContadorComponent,
    HabilidadDeSociedadDeAuditoriaComponent,
    RegistroDeAuditoresIndependientesComponent,
    RegistroDePeritosContablesComponent,
    ConveniosComponent,
    BeneficiosColegiadosComponent,
    SeguroMutualComponent,
    MesaDePartesVirtualComponent,
    FormaDePagosComponent,
    ColegiaturasComponent,
    InscripcionDeSociedadesDeAudtoriaComponent,
    CuotaOrdinariaComponent,
    SeguroMutualTrComponent,
    ConstanciaDeHabilidadComponent,
    EntrevistasComponent,
    NoticiasComponent,
    PronunciamientosComponent,
    RevistaComponent,
    YoutubePipe,
    DuplicadosComponent,
    CapacitacionInformacionComponent,
    CapacitacionCategoriaComponent,
    innerhtml,
    PronunciamientosInformacionComponent,
    AlquilerInstalacionesListComponent,
    AlquilerInstalacionesDetailComponent,
    GaleriaEventosListComponent,
    GaleriaEventosDetailComponent,
    InformesComponent,
    InformativosComponent,
    SearchResultsComponent,
    LoginComponent,
    HistorialEstadoCuentaComponent,
    ResetPasswordComponent,
    DetalleHistorialEstadoCuentaComponent,
    LibrosComponent,
    LibrosDetalleComponent
  ],
  imports: [
    PdfViewerModule,
    NgxMasonryModule,
    BrowserModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule,
    SweetAlert2Module.forRoot(),
    RouterModule.forRoot(
      appRoutes, { scrollPositionRestoration: 'enabled' }
    )
  ],
  providers: [FilterPipe, YoutubePipe, TimeFormat, innerhtml,
    { provide: LOCALE_ID, useValue: 'es-Ar' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
