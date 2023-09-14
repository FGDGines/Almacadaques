type tpDropMenu = {
  target: number;
  text: string;
} & Partial<{ children: tpDropMenu[] }>;

export type { tpDropMenu };