export interface Colaborador {
    nombre: string;
    cargo: string;
    descripcion: string;
    imagen: string;
    contacto: string;
}
export const ListaColaboradores: Colaborador[] = [
{
    nombre: 'Mercé Cazes',
    cargo: 'Educadora de Masaje Infantil',
    descripcion: 'Canalizadora, facilitadora y formadora de la técnica de sanación energética TASI (Terapia Avanzada de Salud Integral)',
    imagen: '../../src/assets/imagen_colaboradores/colaborador1.jpeg',
    contacto: 'https://mercecazes.com/',
},
{
    nombre: 'Paz Jiménez',
    cargo: 'Instructora de Movimiento Creativo',
    descripcion: 'Creadora de Happy Dance, una propuesta de danza lúdica creada para disfrutar y ganar consciencia física y energética',
    imagen: '../../src/assets/imagen_colaboradores/colaboradores2.jpeg',
    contacto: 'https://www.instagram.com/happy_dance_paz/',
},
{
    nombre: 'Monti Serra',
    cargo: 'Entrenadora emocional especialitzada en el Benestar Emocional',
    descripcion: 'Acompaña a empresas y organizaciones para que sus profesionales y equipos mejoren, gracias a la comunicación emocional aplicada al liderazgo y al trabajo en equipo. Conferenciante y escritora',
    imagen: '../../src/assets/imagen_colaboradores/colaborador3.jpeg',
    contacto: 'https://www.montiserra.com/ca/',
},
{
    nombre: 'Maribel Salvador',
    cargo: 'CEO maribelsalvador.com',
    descripcion: 'Creadora de Happy Dance, una propuesta de danza lúdica creada para disfrutar y ganar consciencia física y energética',
    imagen: '../../src/assets/imagen_colaboradores/colaboradores4.jpeg',
    contacto: 'https://www.linkedin.com/in/maribel-salvador-alcaraz-formacion/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
}
  
]