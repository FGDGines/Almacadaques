import { enLanguageFlag } from "../types/typesContext";

type TextosType<T extends string> = {
    [key in enLanguageFlag]: {
        [subkey in T]: string;
    };
};

export const textos: TextosType<"inicio"> = {
    [enLanguageFlag.ES]: {
        inicio: "Inicio"
    },
    [enLanguageFlag.EN]: {
        inicio: "Home"
    },
    [enLanguageFlag.CAT]:{
        inicio: "Casa"
    }
};
