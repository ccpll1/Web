import { Component, OnInit } from '@angular/core';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-consejo-directivo',
  templateUrl: './consejo-directivo.component.html',
  styleUrls: ['./consejo-directivo.component.css']
})
export class ConsejoDirectivoComponent implements OnInit {

  consejod = [
    {
      id: 1,
      nombre: "EBERT GILMER BURGOS VEJARANO",
      cargo: "DECANO",
      image: "team6.jpg",
      formacionacademica: ['Contador Público, Abogado, Doctor en Derecho.', 'Magister en Derecho Constitucional y Administrativo.', 'Máster en Derecho Tributario por la Universidad de Barcelona.',
        'Estudios de Fiscalidad Internacional en la Universidad Complutense de Madrid y Universidad Austral deArgentina.'
      ],
      actividadprofesional: ['Docente de la Escuela de Contabilidad y Finanzas de la UNT.', ' Miembro del Comité Técnico de Tributación de la Junta de Decanos de Colegio de Contadores Públicos del Perú.',
        'Miembro de la Comisión de Tributación de la Cámara de Comercio de La Libertad.', 'Gerente de Chumán, Saavedra & Asociados.']
    },
    {
      id: 2,
      nombre: 'LOLA ZORAIDA FRANCO HONORES',
      cargo: 'VICE DECANA',
      image: 'team2.jpg',
      formacionacademica: ['Contador Público.', 'Magister en Gestión de Empresas por ESAN.', 'Estudios de Alta Dirección en las Escuelas de Negocios de la Universidad de Piura y Wharton.'],
      actividadprofesional: ['Maestro en Gestión de Entidades Educativas por IEDE.', 'Gerente Central de Finanzas de SEDALIB.', 'Gerente General de Carrocerías Morillas S.A.', 'Vicepresidente del Directorio de Carrocerías Morillas e Hidrandina',
        'Director de la Facultad de Negocios de la UPN.', 'Profesor Universitario y Consultor de Negocios.']
    },
    {
      id: 3,
      nombre: 'HUNTER SAMAME GALLO',
      cargo: 'DIRECTOR SECRETARIO',
      image: 'team1.jpg',
      formacionacademica: ['Contador Público.', 'Magister en Administración de Negocios, MBA.', 'Estudios de Doctorado en Contabilidad y Finanzas.',
        'Diplomado de emprendimiento e innovación en la Universidad de Los Andes (Colombia).'],
      actividadprofesional: ['Decano de la Facultad de Ciencia Empresariales de la Universidad César Vallejo.', 'Becario de Southern Copper Corporation.',
        'Docente universitario.', 'Gerente de Administración y Finanzas de Nor Sur S.A.']
    },
    {
      id: 4,
      nombre: 'BLANCA DEL ROCÍO TIRADO GARCÍA',
      cargo: 'DIRECTORA DE FINANZAS',
      image: 'team5.jpg',
      formacionacademica: ['Contador Público por la Universidad Nacional de Trujillo.'],
      actividadprofesional: ['Maestro en Gestión Empresarial.', 'Gerente de Tejada Arbulú & Asociados', 'Gerente de Servicios Empresariales Integrales SA - Mejorando.',
        'Consultor y Asesor de empresas.', 'Docente en la Universidad Nacional de Trujillo.']
    },
    {
      id: 5,
      nombre: 'BLANCA LILIANA ANICETO RAMOS',
      cargo: 'DIRECTORA DE ACTIVIDADES CULTURALES, SOCIALES Y ASISTENCIALES',
      image: 'team4.jpg',
      formacionacademica: ['Contador Público.', 'Estudios de Maestría en Tributación y Asesoría Fiscal de Empresas por la Universidad César Vallejo.', 'Diplomado en Habilidades Directivas en ESAN.'],
      actividadprofesional: ['Experiencia laboral en entidades privadas y públicas.', 'Actualmente presta servicios en la Administración Pública.']
    },
    {
      id: 6,
      nombre: 'VÍCTOR AUGUSTO MUÑOZ MARINO',
      cargo: 'DIRECTOR DE DEFENSA PROFESIONAL, ASUNTOS INTERNOS, INSTITUCIONAL Y PUBLICACIONES',
      image: 'team3.jpg',
      formacionacademica: ['Contador Público.', 'Licenciada en Educación.', 'Maestría en pedagogia universitaria.', 'Estudios de Doctorado en Contabilidad y Finanzas.'],
      actividadprofesional: ['Docente en la Universidad César Vallejo, Universidad Señor de Sipán, Universidad Nacional de Trujillo y Universidad Privada de Trujillo.', 'Asesora y consultora en tributación, finanzas, temas empresariales e investigación.']
    }
  ]
  constructor(public readonly swalTargets: SwalPortalTargets) { }
  info;

  ngOnInit(): void {
  }

}

