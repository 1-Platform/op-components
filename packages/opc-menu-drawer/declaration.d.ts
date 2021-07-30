declare module '*.scss';
// Add your type definitions here
type OpcMenuDrawerLinkGroup = {
  title: string;
  links: OpcMenuDrawerLink[];
};

type OpcMenuDrawerLink = {
  name: string;
  href: string;
};
