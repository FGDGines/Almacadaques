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
}

export type {
    GlobalContextType, 
}

