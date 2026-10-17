export type Step = {
  id: number;
  icon: string;
  text: string;
};
export type ProcessBtn = {
  label: string;
  href: string;
};

export type ProcessData = {
  title: string;
  description: string;
  steps: Step[];
  button: ProcessBtn;
};
