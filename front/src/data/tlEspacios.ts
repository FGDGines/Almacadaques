import { tpTimeLineData } from "../types/typesComponents";
import { enLanguageFlag } from "../types/typesContext";

type tlTextosType = {
    [key in enLanguageFlag]: tpTimeLineData[]
}

export const tlEspacios: tlTextosType = {
    ES: [
        { id: 1, text: "Tener claros tus objetivos y como ir a por ellos." },
        { id: 2, text: "Sentirte motivad@ y apasionad@ por la vida." },
        { id: 3, text: "Empoderarte para liderar tu vida." },
        { id: 4, text: "Confiar en ti y expresarte con seguridad." },
        { id: 5, text: "Tener unos hábitos saludables." },
        { id: 6, text: "Soltar creencias limitantes." },
        { id: 7, text: "Estar alinead@ con tu propósito." },
        { id: 8, text: "Saber cuál es tu talento y como usarlo para tu éxito." },
    ],
    EN: [
        { id: 1, text: "Set clear goals and how to achieve them." },
        { id: 2, text: "Feel motivated and passionate about life." },
        { id: 3, text: "Empower yourself to lead your life." },
        { id: 4, text: "Trust in yourself and express yourself with confidence." },
        { id: 5, text: "Have healthy habits." },
        { id: 6, text: "Let go of limiting beliefs." },
        { id: 7, text: "Be aligned with your purpose." },
        { id: 8, text: "Know your talent and how to use it for your success." },
    ],
    CAT: [
        { id: 1, text: "Tenir objectius clars i com aconseguir-los." },
        { id: 2, text: "Sentir-te motivat@ i apassionat@ per la vida." },
        { id: 3, text: "Empoderar-te per liderar la teva vida." },
        { id: 4, text: "Confia en tu mateix i expressa't amb seguretat." },
        { id: 5, text: "Tenir hàbits saludables." },
        { id: 6, text: "Allibera't de les creences limitants." },
        { id: 7, text: "Estar alineat amb el teu propòsit." },
        { id: 8, text: "Coneix el teu talent i com utilitzar-lo per al teu èxit." },
    ]
}


