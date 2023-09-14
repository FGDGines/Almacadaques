import { FC, createContext, useState } from "react";
import { GlobalContextType } from "../types/typesContext";


export const GlobalContext = createContext<GlobalContextType>({
    layoutID: 1,
    setLayoutID(){},
})

export const GlobalContextProvider: FC<{children: React.ReactNode}> = ({children})=>{
    const [layoutID , setLayoutID] = useState<number>(1) 
    return <GlobalContext.Provider 
        value={
            {
                layoutID,
                setLayoutID
            }
        }>
            {children}
        </GlobalContext.Provider>        
}