import { ReactNode } from "react";

type tpNavButton = {
  target: number;
  text: string;
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

export type {
  tpNavButton,
  tpDropMenu,
  tpBtNice,
  tpFranja,
  tpAlternateTimeLine,
  tpTimeLineData,
  tpBtnIcon,
};
