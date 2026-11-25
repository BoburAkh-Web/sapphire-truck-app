export type ContactFormText = {
  title: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitLabel: string;
  sendingLabel: string;
  successMessage: string;
  errorMessage: string;
};

export type ContactData = {
  badge: string;
  title: string;
  phoneLabel: string;
  emailLabel: string;
  locationLabel: string;
  form: ContactFormText;
};
