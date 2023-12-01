import { FC, createContext, useState } from "react";
import { Colaborador } from "../data/colaboradores";
import { AudioPlayerProps, RedProps, tpBlogInfo, tpCalendarEvent, tpTextLibro } from "../types/typesComponents";
import { GlobalContextType, enLanguageFlag } from "../types/typesContext";

export const GlobalContext = createContext<GlobalContextType>({
    layoutID: 2,
    setLayoutID() { },
    languajeActive: 1,
    setLanguajeActive() { },
    languageFlag: enLanguageFlag.ES,
    setLanguageFlag() { },
    upOrDown: false,
    setUpOrDown() {  },
    indexCarrousel: -1,
    setIndexCarrousel() {},
    indexRed: -1,
    setIndexRed() {},
    indexEspacio: -1,
    setIndexEspacio() {},
    indexTestimony: -1,
    setIndexTestimony() {},
    indexCollaborator: -1,
    setIndexCollaborator() {},
    indexPodcast: -1,
    setIndexPodcast() {},
    indexBlogRetiro: -1,
    setIndexBlogRetiro() {},
    indexTextLibro: -1,
    setIndexTextLibro() {},
    indexCalendarEvent: -1,
    setIndexCalendarEvent() {},
    dataRed: null,
    setDataRed() {},
    dataRetiro: null,
    setDataRetiro() {},
    dataPodcast: null,
    setDataPodcast() {},
    dataEvent: null,
    setDataEvent() {},
    dataColaborador: null,
    setDataColaborador() {},
    dataText: null,
    setDataText() {}
})

export const GlobalContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [layoutID, setLayoutID] = useState<number>(1)
    const [languajeActive, setLanguajeActive] = useState<number>(1)
    const [languageFlag, setLanguageFlag] = useState<enLanguageFlag>(enLanguageFlag.ES)
    const [upOrDownState, setUpOrDownState] = useState(true);
    const [indexCarrousel, setIndexCarrousel] = useState<number>(-1);
    const [indexRed, setIndexRed] = useState<number>(-1);
    const [indexEspacio, setIndexEspacio] = useState<number>(-1);
    const [indexTestimony, setIndexTestimony] = useState<number>(-1);
    const [indexCollaborator, setIndexCollaborator] = useState<number>(-1);
    const [indexPodcast, setIndexPodcast] = useState<number>(-1);
    const [indexBlogRetiro, setIndexBlogRetiro] = useState<number>(-1);
    const [indexCalendarEvent, setIndexCalendarEvent] = useState<number>(-1);
    const [indexTextLibro, setIndexTextLibro] = useState<number>(-1);
    const [ dataRed, setDataRed ] = useState<RedProps | null>(null);
    const [ dataRetiro, setDataRetiro ] = useState<tpBlogInfo | null>(null);
    const [ dataPodcast, setDataPodcast ] = useState<AudioPlayerProps | null>(null);
    const [ dataEvent, setDataEvent ] = useState<tpCalendarEvent | null>(null); 
    const [ dataColaborador, setDataColaborador ] = useState<Colaborador | null>(null); 
    const [ dataText, setDataText ] = useState<tpTextLibro | null>(null); 


    const setUpOrDown = (arg: boolean) => {
        setUpOrDownState(arg);
    } 

    const CambiarIdioma = (arg: number) => {
        setLanguajeActive(arg);
        switch (arg) {
            case 1:
                setLanguageFlag(enLanguageFlag.ES);
                break;
            case 2:
                setLanguageFlag(enLanguageFlag.EN);
                break;
            case 3:
                setLanguageFlag(enLanguageFlag.CAT);
                break;
            default:
                setLanguageFlag(enLanguageFlag.ES);
        }
    }

    return <GlobalContext.Provider
        value={
            {
                layoutID,
                setLayoutID,
                languajeActive,
                setLanguajeActive: CambiarIdioma,
                languageFlag,
                setLanguageFlag,
                upOrDown: upOrDownState,
                setUpOrDown: setUpOrDown,
                indexCarrousel,
                setIndexCarrousel,
                indexRed,
                setIndexRed,
                indexEspacio,
                setIndexEspacio,
                indexTestimony,
                setIndexTestimony,
                indexCollaborator,
                setIndexCollaborator,
                indexPodcast,
                setIndexPodcast,
                indexBlogRetiro, 
                setIndexBlogRetiro,
                indexCalendarEvent, 
                setIndexCalendarEvent,
                indexTextLibro, 
                setIndexTextLibro,
                dataRed,
                setDataRed,
                dataRetiro,
                setDataRetiro,
                dataPodcast,
                setDataPodcast,
                dataEvent,
                setDataEvent,
                dataColaborador,
                setDataColaborador,
                dataText,
                setDataText
            }
        }>
        {children}
    </GlobalContext.Provider>
}
