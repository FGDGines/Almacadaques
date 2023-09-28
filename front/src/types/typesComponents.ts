import { ReactNode } from "react";


type tpCarouelItem = {
    title: string,
    src: string
}

type tpCarouselData = {
    items: tpCarouelItem[]
}



type tpNavButton = {
    target: number;
    text: string;
};

type tpDropMenu = {
    text: string;
    children: tpNavButton[];
};


type tpBtNice = {
    text: string,
    handler: () => void
} & Partial<{
    tp: string
}>

type tpBtnIcon = {
    text: string,
    Icon: ReactNode,
    clase?: string
}

type tpFranja = {
    text: string
}

type tpTimeLineData = {
    id: number
    text: string
}

type tpAlternateTimeLine = {
    data: tpTimeLineData[]
}

type tpCardM1 = {
    title: string,
    body: string[]
}

export type {
    tpNavButton,
    tpDropMenu,
    tpBtNice,
    tpFranja,
    tpAlternateTimeLine,
    tpTimeLineData,
    tpBtnIcon,
    tpCarouelItem, 
    tpCarouselData,
    tpCardM1
};