import { excellentIcon, goodIcon, needsImprovementIcon } from "./assets";

export const defaultTemplate = {
  feedbackFAB: 'Send Feedback',
  dialogTitle: 'Share your thoughts with us',
  bugReportTitle: 'Report Bug',
  feedbackReportTitle: 'Share Feedback',
  documentationTitle: 'Documentation',
  spaRedirectTitle: 'View Feedback',
  errorTitle: 'What is wrong?',
  bugSubmissionNote: 'Note: By submitting a bug it will open an issue in jira',
  feedbackTitle: 'How was your overall experience?',
  feedbackSubtitle: 'It will help us to improve platform',
  summary: 'Summary',
  summaryPlaceholder: 'How can we do better?',
  confirmationTitle: 'Thanks for your feedback. Your experience is important to us!',
  confirmationSubTitle: 'Each time a friend submits a experience, it creates a task for our developer team to resolve it with priority.',
  confirmationEventMessage: 'Submitted the feedback',
  experienceList: [{
    name: 'Excellent',
    assetUrl: excellentIcon
  },
  {
    name: 'Good',
    assetUrl: goodIcon
  },
  {
    name: 'Needs Improvement',
    assetUrl: needsImprovementIcon
  }],
  errorList: [{
    name: 'Slow Loading'
  },
  {
    name: 'Not Responsive'
  },
  {
    name: 'Navigation'
  },
  {
    name: 'UI Issues'
  },
  {
    name: 'Other'
  }]
} as TemplateView;