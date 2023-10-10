import { enLanguageFlag } from "../types/typesContext";

type TextosType<T extends string> = {
    [key in enLanguageFlag]: {
        [subkey in T]: string;
    };
};

export const textos: TextosType<
    "inicio" |
    "sobreMi" |
    "blog" |
    "coaching" |
    "agenda" |
    "expBienesytar" |
    "expDeMedida" |
    "colabrador" |
    "blogPost" |
    "testimonios" |
    "contactar" |
    "title1"
> = {
    [enLanguageFlag.ES]: {
        inicio: "Inicio",
        sobreMi: "Sobre Mi",
        blog: "blog",
        coaching: "Coaching ES",
        agenda: "Agenda es ",
        expBienesytar: "Experiencias de Bienestar",
        expDeMedida: "Expeiencias de Medida ES",
        colabrador: "Colaborador ES",
        blogPost: "Blog Post ES",
        testimonios: "Testominio ES",
        contactar: "Contactar ES",
        // Fin del Navbar
        title1: "Title 1 ES"
    },
    [enLanguageFlag.EN]: {
        inicio: "Home",
        sobreMi: "About Me",
        blog: "Blog EN ",
        coaching: "Coaching EN",
        agenda: "Agenda En",
        expBienesytar: "Experiencias de Bienestar EN",
        expDeMedida: "Expeiencias de Medida EN",
        colabrador: "Colaborador EN",
        blogPost: "Blog Post EN",
        testimonios: "Testominio EN",
        contactar: "Contactar EN",
        // Fin del Navbar
        title1: "Title 1 EN"
    },
    [enLanguageFlag.CAT]: {
        inicio: "Casa",
        sobreMi: "Esto en Cat",
        blog: " BLog Cat",
        coaching: "Coaching CAT",
        agenda: "Agenda Cat",
        expBienesytar: "Experiencias de Bienestar CAT",
        expDeMedida: "Expeiencias de Medida CAT",
        colabrador: "Colaborador CAT",
        blogPost: "Blog Post CAT",
        testimonios: "Testominio CAT",
        contactar: "Contactar CAT",
        // Fin del Navbar
        title1: "Title 1 CAT"
    }

};
