declare module '*.scss';
// Add your type definitions here
type OpcMenuDrawerLinkGroup = {
  title: string;
  links: OpcMenuDrawerLink[];
  isSearchable?: boolean;
};

type OpcMenuDrawerLink = {
  name: string;
  href: string;
  isDisabled?: boolean;
};
