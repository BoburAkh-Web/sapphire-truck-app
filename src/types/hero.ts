export type HeroSlide = {
  id: number;
  image: string;
  position: string;
  alt: string;
};
export type HeroTitle = {
  start: string;
  highlight: string;
  end: string;
};

export type HeroData = {
  slides: HeroSlide[];
  badge: string;
  description: string;
  title: HeroTitle;
};
