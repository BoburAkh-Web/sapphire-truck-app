export type WhyUsItem = {
  id: number;
  icon: string;
  title: string;
  text: string;
};

export type WhyUsData = {
  badge: string;
  title: string;
  items: WhyUsItem[];
};
