declare module '*.scss';
declare module "*.json";
// Add your type definitions here

type ErrorList = {
  name: string
}

type ExperienceList = {
  name: string;
  assetUrl: string;
  errorList: ErrorList[];
}

type TemplateView = {
  title: string;
  subtitle: string;
  summary: string;
  summaryPlaceholder: string;
  confirmationEventMessage: string;
  errorTitle: string;
  confirmationTitle: string;
  confirmationSubTitle: string;
  experienceList: ExperienceList[];
}