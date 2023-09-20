type tpBtNice = {
    text: string , 
    handler: () => void
} & Partial<{
    tp: string 
}>

type tpFranja = {
    text: string
}

export type  {
    tpBtNice,
    tpFranja
}