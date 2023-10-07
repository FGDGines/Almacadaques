import { FC, createContext, useState } from "react";
import { GlobalContextType } from "../types/typesContext";




export const GlobalContext = createContext<GlobalContextType>({
    layoutID: 2,
    setLayoutID(){},
    languajeActive: 1,
    setLanguajeActive(){},
    languageFlag: "ES", 
    setLanguageFlag(){}
})

export const GlobalContextProvider: FC<{children: React.ReactNode}> = ({children})=>{
    const [layoutID , setLayoutID] = useState<number>(1)     
    const [languajeActive , setLanguajeActive] = useState<number>(1)
    const [languageFlag , setLanguageFlag] = useState<string>("ES")

    return <GlobalContext.Provider 
        value={
            {
                layoutID,
                setLayoutID,
                languajeActive,
                setLanguajeActive,
                languageFlag, 
                setLanguageFlag
            }
        }>
            {children}
        </GlobalContext.Provider>        
}