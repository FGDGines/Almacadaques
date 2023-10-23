import { ReactNode } from "react";

// Definición del tipo de evento

type tpCarouelItem = {
    title: string;
    src: string;
    id: number,
    autor: string,
    link_autor: string 
};

type tpFormAgenda = {
    actividades: tpCalendarDates[],
    currentAct?: number,
}

type tpCarouselData = {
    items: tpCarouelItem[];
};

type tpTestimonyBar = {
    testimonies: tpTestimony[];
    quantityPerLayout: number;
};

type tpTestimony = {
    id: number;
    witness: string;
    image: string;
    day: number;
    month: number;
    year: number;
    testimony: string;
};

type tpBlogInfo = {
    index: number;
    day?: number;
    month?: number;
    year?: number;
    image: string;
    title: string;
    tags?: string[];
    abstract?: string;
    blogContent?: React.JSX.Element;
    hselect?: ()=>void
};



type tpNavButton = {
    target: number;
    text: string | React.JSX.Element;
};

type tpDropMenu = {
    text: string;
    children: tpNavButton[];
};

type tpBtNice = {
    text: string;
    handler: () => void;
} & Partial<{
    tp: string;
}>;

type tpBtnIcon = {
    text: string;
    Icon: ReactNode;
    clase?: string;
};

type tpFranja = {
    text: string;
};

type tpTimeLineData = {
    id: number;
    text: string;
};

type tpAlternateTimeLine = {
    data: tpTimeLineData[];
};

type tpCardM1 = {
    title: string;
    body: string[];
};

type tpCalendarEvent = {
    id: number
    title: string
    start: string | Date
    end: string | Date
    description?: string
    colaborator_name?:string
    colaborator_link?:string
    src?:string 
}


type tpRetiroAnterior =  {
    hselect: (arg: tpCalendarDates )=>void
} & tpCalendarEvent


type tpCalendarDates = tpCalendarEvent //Alias para compativilidad

type tpAgenda = {
    hSelect: (arg: tpCalendarDates) => void
}

type tpItemSelect = {
    id: number
    title: string
    url: string
}
type tpDtmSelect = {
    active: number
    items: tpItemSelect[],
}


type tpDialogMUI1 = {
    open: boolean
    handleClickOpen:  () => void
    handlerClose: () => void
    evento: tpCalendarDates | ReactNode
}
type tpDtmResponse = {
    msg: string
    status: number
    bag?:[] | unknown
}

type tpObjectStringToStrig={
    [key: string]:string
}

type tpFormDefault = {
    hSubmit:(bag: FormData )=>void 
}

export type {
    tpTestimonyBar,
    tpTestimony,
    tpBlogInfo,
    tpNavButton,
    tpDropMenu,
    tpBtNice,
    tpFranja,
    tpAlternateTimeLine,
    tpTimeLineData,
    tpBtnIcon,
    tpCarouelItem,
    tpCarouselData,
    tpCardM1,
    tpCalendarEvent,
    tpAgenda,
    tpFormAgenda,
    tpCalendarDates,
    tpDtmSelect,
    tpItemSelect,
    tpDialogMUI1,
    tpRetiroAnterior,
    tpDtmResponse,
    tpFormDefault,
    tpObjectStringToStrig
};
