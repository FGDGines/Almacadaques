type tpBtNice = {
    text: string , 
    handler: () => void
} & Partial<{
    tp: string 
}>

type tpFranja = {
    text: string
}

type tpTimeLineData ={
    id:number
    text: string
}

type tpAlternateTimeLine = {
    data: tpTimeLineData[]
}

export type  {
    tpBtNice,
    tpFranja,
    tpAlternateTimeLine,
    tpTimeLineData
}