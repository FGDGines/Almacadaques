import { ReactNode } from "react";

type tpCarouelItem = {
  title: string;
  src: string;
};

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
  day: number;
  month: number;
  year: number;
  image: string;
  title: string;
  tags?: string[];
  abstract?: string;
  blogContent?: React.JSX.Element;
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
};
