export interface Colaborador {
    id: number;
    nombre: string;
    cargo: string;
    descripcion: string;
    imagen: string;
    contacto: string;
}
export const ListaColaboradores: Colaborador[] = [
{
    id:1,
    nombre: 'Mercè Cazes',
    cargo: 'Facilitadora del método TASI',
    descripcion: 'Canalizadora, facilitadora y formadora de la técnica de sanación energética TASI (Terapia Avanzada de Salud Integral.)',
    imagen: '../../src/assets/imagen_colaboradores/colaborador1.jpeg',
    contacto: 'https://mercecazes.com/',
},
{
    id:2,
    nombre: 'Paz Jiménez',
    cargo: 'Instructora de Movimiento Creativo',
    descripcion: 'Creadora de Happy Dance, una propuesta de danza lúdica creada para disfrutar y ganar consciencia física y energética .',
    imagen: '../../src/assets/imagen_colaboradores/colaboradores2.jpeg',
    contacto: 'https://www.instagram.com/happy_dance_paz/',
},
{
    id:3,
    nombre: 'Maribel Salvador',
    cargo: 'CEO maribelsalvador.com',
    descripcion: 'Acompaña a empresas y organizaciones para que sus profesionales y equipos mejoren, gracias a la comunicación emocional aplicada al liderazgo y al trabajo en equipo . ',
    imagen: '../../src/assets/imagen_colaboradores/colaboradores4.jpeg',
    contacto: 'https://www.linkedin.com/in/maribel-salvador-alcaraz-formacion/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
},
{
    id:4,
    nombre: 'Monti Serra',
    cargo: 'Entrenadora Bienestar Emocional',
    descripcion: 'Creadora de formaciones y experiencias de autocuidado emocional para aprender a llenar y alimentar nuestro cuerpo.',
    imagen: '../../src/assets/imagen_colaboradores/colaborador3.jpeg',
    contacto: 'https://instagram.com/monti.serra?igshid=MTk0NTkyODZkYg==',
}


]