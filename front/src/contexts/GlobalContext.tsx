import { FC, createContext, useState } from "react";
import { GlobalContextType } from "../types/typesContext";




export const GlobalContext = createContext<GlobalContextType>({
    layoutID: 2,
    setLayoutID(){
        alert("Candela")
    },
    languajeActive: 1,
    setLanguajeActive(){

    }
})

export const GlobalContextProvider: FC<{children: React.ReactNode}> = ({children})=>{
    const [layoutID , setLayoutID] = useState<number>(1)     
    const [languajeActive , setLanguajeActive] = useState<number>(1)
    return <GlobalContext.Provider 
        value={
            {
                layoutID,
                setLayoutID,
                languajeActive,
                setLanguajeActive
            }
        }>
            {children}
        </GlobalContext.Provider>        
}