type tpNavButton = {
  target: number;
  text: string;
};

type tpDropMenu = {
  text: string;
  children: tpNavButton[];
};

export type { tpNavButton, tpDropMenu };
