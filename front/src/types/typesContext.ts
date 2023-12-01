import { Colaborador } from "../data/colaboradores"
import { AudioPlayerProps, RedProps, tpBlogInfo, tpCalendarEvent, tpTextLibro } from "./typesComponents"

export enum enLanguageFlag {
    ES = "ES",
    EN = "EN",
    CAT = "CAT"
}

type GlobalContextType = {
    layoutID: number
    setLayoutID: (arg: number) => void
    languajeActive: number
    setLanguajeActive: (arg: number) => void
    languageFlag: enLanguageFlag
    setLanguageFlag: (arg: enLanguageFlag) => void
    upOrDown: boolean
    setUpOrDown: (arg: boolean)=>void,
    indexCarrousel: number,
    setIndexCarrousel: (arg: number)=>void
    indexRed: number,
    setIndexRed: (arg: number)=>void,
    indexEspacio: number,
    setIndexEspacio: (arg: number)=>void
    indexTestimony: number,
    setIndexTestimony: (arg: number)=>void,
    indexCollaborator: number,
    setIndexCollaborator: (arg: number)=>void,
    indexPodcast: number,
    setIndexPodcast: (arg: number)=>void,
    indexBlogRetiro: number,
    setIndexBlogRetiro: (arg: number)=>void,
    indexCalendarEvent: number,
    setIndexCalendarEvent: (arg: number)=>void,
    indexTextLibro: number,
    setIndexTextLibro: (arg: number)=>void
    dataRed: RedProps | null,
    setDataRed: (data: RedProps | null) => void,
    dataRetiro: tpBlogInfo | null,
    setDataRetiro: (data: tpBlogInfo | null) => void;
    dataPodcast: AudioPlayerProps | null,
    setDataPodcast: (data: AudioPlayerProps | null) => void;
    dataEvent: tpCalendarEvent | null,
    setDataEvent: (data: tpCalendarEvent | null) => void;
    dataColaborador: Colaborador | null,
    setDataColaborador: (data: Colaborador | null) => void;
    dataText: tpTextLibro | null,
    setDataText: (data: tpTextLibro | null) => void;
}

export type {
    GlobalContextType, 
}

