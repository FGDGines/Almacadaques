import { enLanguageFlag } from "../types/typesContext";

type TextosType<T extends string> = {
    [key in enLanguageFlag]: {
        [subkey in T]: string;
    };
};

export const textos: TextosType<
"inicio" | "sobreMi"
> = {
    [enLanguageFlag.ES]: {
        inicio: "Inicio", 
        sobreMi:"Sobre Mi"
    },
    [enLanguageFlag.EN]: {
        inicio: "Home", 
        sobreMi:"About Me"
    },
    [enLanguageFlag.CAT]:{
        inicio: "Casa", 
        sobreMi:"Esto en Cat"
    }
};
