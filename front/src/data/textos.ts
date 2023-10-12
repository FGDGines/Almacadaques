import { enLanguageFlag } from "../types/typesContext";

type TextosType<T extends string> = {
    [key in enLanguageFlag]: {
        [subkey in T]: string;
    };
};

export const textos: TextosType<
    "inicio" |
    "sobreMi" |
    "coaching" |
    "agenda" |
    "expBienestar" |
    "expDeMedida" |
    "colabrador" |
    "testimonios" |
    "blog" |
    "blogPost" |
    "podcast"  |
    "contactar" |
    "title1"
> = {
    [enLanguageFlag.ES]: {
        inicio: "Inicio",
        sobreMi: "Sobre Mi",
        coaching: "Coaching",
        agenda: "Agenda es ",
        expBienestar: "Experiencias de Bienestar",
        expDeMedida: "Expeiencias de Medida",
        colabrador: "Colaborador",
        testimonios: "Testominio",
        blog: "blog",
        blogPost: "Blog Post",
        podcast: "Podcast",
        contactar: "Contactar",
        // Fin del Navbar
        title1: "Title 1"
    },
    [enLanguageFlag.EN]: {
        inicio: "Home",
        sobreMi: "About Me",
        coaching: "Coaching",
        agenda: "Agenda",
        expBienestar: "Well-being Experiences",
        expDeMedida: "Customizd well-being experiences",
        colabrador: "Collaborators",
        testimonios: "Testominio EN",
        blog: "Blog",
        blogPost: "Blog Post",
        podcast: "Podcast",
        contactar: "Contact",
        // Fin del Navbar
        title1: "Title 1 EN"
    },
    [enLanguageFlag.CAT]: {
        inicio: "Inici",
        sobreMi: "Sobre mi",
        coaching: "Coaching",
        agenda: "Agenda",
        expBienestar: "Experiències de benestar",
        expDeMedida: "Experiències a mida",
        colabrador: "COLABORAD@RS",
        testimonios: "Testomini",
        blog: "Blog",
        blogPost: "Blog Post",
        podcast: "Podcast",
        contactar: "Contacte",
        // Fin del Navbar
        title1: "Title 1 CAT"
    }

};
