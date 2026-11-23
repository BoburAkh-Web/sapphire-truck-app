export type ServiceItem = {
  id: string;
  label: string;
  icon: string;
  heading: string;
  text: string;
};

export type ServiceData = {
  badge: string;
  title: string;
  items: ServiceItem[];
};
