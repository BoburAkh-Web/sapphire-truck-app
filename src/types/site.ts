export type SitePhone = {
  label: string;
  href: string;
};

export type SiteWorkingHour = {
  topBar: string;
  footer: string;
};

export type SiteData = {
  name: string;
  address: string;
  email: string;
  phones: SitePhone[];
  workingHours: SiteWorkingHour;
};
