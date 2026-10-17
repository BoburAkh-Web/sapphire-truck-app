export type HeroSlide = {
  id: number;
  image: string;
  alt: string;
};
export type HeroTitle = {
  start: string;
  highlight: string;
  end: string;
};

export type HeroData = {
  slides: HeroSlide[];
  description: string;
  title: HeroTitle;
};
