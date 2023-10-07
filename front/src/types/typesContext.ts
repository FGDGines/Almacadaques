

type GlobalContextType  = {
    layoutID: number
    setLayoutID: (arg: number)=>void
    languajeActive: number
    setLanguajeActive: (arg: number)=>void
    languageFlag: string
    setLanguageFlag: ( arg:string )=>void
}

export type {
    GlobalContextType
}