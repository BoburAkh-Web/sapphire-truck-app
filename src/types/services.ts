export type ServiceItem = {
  id: string;
  label: string;
  icon: string;
  heading: string;
  text: string;
};

export type ServiceData = {
  title: string;
  items: ServiceItem[];
};
