import { tpCalendarEvent } from "../types/typesComponents";

export const eventos: tpCalendarEvent[] = [
    {
        id:1, 
        title: 'Playa',
        description: `Reúnete en la playa con expertos
                      del coaching, para alinear tus chakras
                      y que el bienestar fluya con las mejores compañias`,
        start: '2023-10-02T10:00:00',
        end:   '2023-10-02T12:00:00',
    },
    {
        id:1, 
        title: 'Bosque',
        description: `Experiencia reparadora,
                      rodeado de la naturaleza,
                    para conectar con tu yo mas primitivo`,
        start: '2023-10-14T10:00:00',
        end:   '2023-10-14T12:00:00',
    }
];


export const pastEvent: tpCalendarEvent[] = [
    {
        id:1, 
        title: 'Playa',
        description: `Reúnete en la playa con expertos
                      del coaching, para alinear tus chakras
                      y que el bienestar fluya con las mejores compañias`,
        start: '2023-10-02T10:00:00',
        end:   '2023-10-02T12:00:00',
        src: "./src/assets/images/blog-line-1-620x464.jpg",
        colaborator_name: "El colaborador",
        colaborator_link: "https://www.google.com/search?q=colaborador&oq=colaborador&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIJCAYQABgKGIAEMgYIBxBFGDzSAQg0NDAzajBqNKgCALACAA&sourceid=chrome&ie=UTF-8"
    },
    {
        id:2, 
        title: 'Playa',
        description: `Reúnete en la playa con expertos
                      del coaching, para alinear tus chakras
                      y que el bienestar fluya con las mejores compañias`,
        start: '2023-10-02T10:00:00',
        end:   '2023-10-02T12:00:00',
        src: "./src/assets/images/blog-line-1-620x464.jpg",
        colaborator_name: "El colaborador",
        colaborator_link: "https://www.google.com/search?q=colaborador&oq=colaborador&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIJCAYQABgKGIAEMgYIBxBFGDzSAQg0NDAzajBqNKgCALACAA&sourceid=chrome&ie=UTF-8"
    }
];
