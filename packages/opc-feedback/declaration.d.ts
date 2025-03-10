declare module '*.scss';
declare module '*.json';
// Add your type definitions here

type ErrorList = {
  name: string;
};

type ExperienceList = {
  name: string;
  assetUrl: string;
};

type TemplateView = {
  feedbackFAB: string;
  dialogTitle: string;
  bugReportTitle: string;
  feedbackReportTitle: string;
  documentationTitle: string;
  spaRedirectTitle: string;
  errorTitle: string;
  bugSubmissionNote: string;
  feedbackTitle: string;
  feedbackSubtitle: string;
  subtitle: string;
  summary: string;
  summaryPlaceholder: string;
  confirmationEventMessage: string;
  confirmationTitle: string;
  confirmationSubTitle: string;
  experienceList: ExperienceList[];
  errorList: ErrorList[];
};

type Application = {
  name?: string;
  url?: string;
};
